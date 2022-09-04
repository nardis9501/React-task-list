import TaskForm from "./TaskForm";
import '../stylesheet/TasksList.css';
import { useState } from "react";
import Tasks from "./Tasks";

function TasksList() {

    const [tasks, setTasks] = useState([]);
    
    const taskAdd = (task) => {
        task.text = task.text.trim();
        if (task.text) {
            const tasksUpdate = [task, ...tasks];
            setTasks(tasksUpdate);
        }
    }

    const takeTaskCompled = (id) => {
        const tasksUpdate = tasks.map(task => {
            if(id===task.id){
                task.compled = !task.compled;
            }
            return task;
        });
        setTasks(tasksUpdate);
    }
    
    const takeTaskDelete = (id) => {
        const tasksUpdate = tasks.filter(task => task.id !== id)
        setTasks(tasksUpdate);
    }
    
    return (
        /* Fragmento (etiquetas vacias) */
        <>
           <TaskForm onSubmitTask={taskAdd} />
           <div className="tasks-list-container">
                
               { 
                    tasks.map((tasksArray) =>
                        <Tasks 
                        key={tasksArray.id}
                        id={tasksArray.id}
                        text={tasksArray.text}
                        compled={tasksArray.compled}
                        taskDelete={takeTaskDelete}
                        taskCompled={takeTaskCompled}
                        />

                    )
                }
            </div> 
        </>
    );
}

export default TasksList;