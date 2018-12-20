const Task = props => {
  return(
    <tr>
      <td>
        { props.task.completed && <s>{props.task.description}</s> }
        { !props.task.completed && props.task.description }
      </td>
      <td>
        <button onClick={ () => props.updateTask(props.task) }>
          { props.task.completed ? "Mark Incomplete" : "Mark Complete" }
        </button>
      </td>
      <td>
        <button onClick={ () => props.deleteTask(props.task) }>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Task
