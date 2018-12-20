const Task = props => {
  return(
    <tr>
      <td>{props.task.description}</td>
      <td>
        <button onClick={ () => props.deleteTask(props.task) }>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Task
