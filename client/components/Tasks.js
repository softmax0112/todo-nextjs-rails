import Task from './Task'

const Tasks = props => (
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        props.tasks.map(task => {
          return(
            <Task
              key={task.id}
              task={task}
              deleteTask={props.deleteTask}
            />
          )
        })
      }
    </tbody>
  </table>
)

export default Tasks
