//to access props we either can use fun name(props) and use the property of props like props.property name
//or we can use destructuring like {prop1, prop2} and use them directly
export function TaskCard({ task, handelDelete, info }) { 
    return (
    <>
    <li key={task.id} className = {(task.isCompleted)?"completed":"incomplete"}>
            <span>{task.id} - {task.name} - {info}</span>
            <button className='delete' onClick={() => handelDelete(task.id)}>delete</button>
    </li>

    
    </>
    )
}