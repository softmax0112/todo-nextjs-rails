import { useState } from 'react'

const emptyTask = { description: '' }

const TaskForm = props => {
  const [task, setTask] = useState(emptyTask)
  const handleSubmit = event => {
    event.preventDefault()
    props.createTask(task)
    setTask(emptyTask)
  }
  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Description</label>
      <input
        name="description"
        type="text"
        value={task.description}
        onChange={ e => setTask({ ...task, description: e.target.value })}
      />
    </form>
  )

}

export default TaskForm
