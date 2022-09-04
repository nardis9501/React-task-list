import { useState } from 'react';
import '../stylesheet/TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

function TaskForm( {onSubmitTask} ) {

    const [input, setInput] = useState('');

    const takeChangeInput = (e) => {
        setInput(e.target.value);
    } 
    

    const takeSendForm = (e) => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            compled: false
        }
        {onSubmitTask(newTask)};
    }
    
    return (
        <form action=""  onSubmit={takeSendForm} className="task-form">
            <button className="task-button">
                Add Task
            </button>
            <input type="text" className="task-input" 
            placeholder="Write a new task" name="text"
            onChange={takeChangeInput} />

        </form>
    );
}

export default TaskForm;