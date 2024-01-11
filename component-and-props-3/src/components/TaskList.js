    import { useState } from "react";
    import { TaskCard } from "./TaskCard";
    import { BoxCard } from "./BoxCard";

    export const TaskList = ({info}) =>{
        const [tasks, setTask] = useState([
            {id:123, name:"walking", isCompleted: false},
            {id:134, name:"Running", isCompleted: true},
            {id:145, name:"jumping", isCompleted: false}
        ])
        const [show, setShow] = useState(true); //this state for toggeling
        
        function handelDelete(id){
            setTask(tasks.filter(task => task.id !== id))
        }
        return(
            <>
            <h1>Task List</h1>
            <ul>
            <button onClick={() => setShow(!show)} className='trigger'>Toggle</button>{/*to hide or show the list. if true show, if false hide*/}
            {show && tasks.map((task) => (
                <TaskCard key={task.id} task = {task} handelDelete = {handelDelete} info = {info}/>//pass thr props inside tags or cards <tag propName = {value} u can use method, list array, manual value inside the props
            ))}
            </ul>

        <BoxCard result = "warning">
            <p className="title">dagggddnb</p>
            <p className="discription"> hello you are doing this the wrong way</p>
        </BoxCard>
        <BoxCard result="success">
            <p className="title">dagggddnb</p>
            <p className="discription"> hello you are doing this the wrong way</p>
        </BoxCard>
        <BoxCard result="alert">
            <p className="title">dagggddnb</p>
            <p className="discription"> hello you are doing this the wrong way</p>
        </BoxCard>
            </>
        )
    }
