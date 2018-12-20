import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { BackendContext } from '../components/BackendUrlsProvider'
import { FlashContext } from '../components/FlashProvider'
import Tasks from '../components/Tasks'
import TaskForm from '../components/TaskForm'

const Index = () => {
  const { tasksUrl, taskUrl } = useContext(BackendContext)
  const { setFlash } = useContext(FlashContext)
  const [tasks, setTasks] = useState([])
  useEffect(() => { fetchTasks() }, [])

  const fetchTasks = () => {
    axios.get(tasksUrl).then(({ data } ) => { setTasks(data.tasks) })
  }

  const createTask = task => {
    axios.post(tasksUrl, task)
      .then(({ data }) => {
        tasks.push(data.task)
        setTasks(tasks)
        setFlash({ messages: ['Task successfully created'] })
      })
      .catch(({ response }) => {
        setFlash({ messages: response.data.errors })
      })
  }

  const updateTask = task => {
    axios.patch(taskUrl(task)).then(({ data }) => {
      const index = tasks.findIndex(t => t.id === task.id)
      tasks[index] = data.task
      setTasks(tasks)
      setFlash({ messages: ['Task successfully updated'] })
    })
  }

  const deleteTask = task => {
    if(confirm("Are you sure?")){
      axios.delete(taskUrl(task)).then(({ data }) => {
        const filtered = tasks.filter(t => t.id !== data.task.id)
        setTasks(filtered)
        setFlash({ messages: ['Task successfully deleted'] })
      })
    }
  }

  return(
    <React.Fragment>
      <Tasks
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <hr></hr>
      <TaskForm
        createTask={createTask}
      />
    </React.Fragment>
  )
}

export default Index
