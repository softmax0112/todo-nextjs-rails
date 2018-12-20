import Task from './Task'

const Tasks = props => (
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        props.tasks.map(task => {
          return <Task key={task.id} task={task} {...props} />
        })
      }
    </tbody>
  </table>
)

export default Tasks
