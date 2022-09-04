import '../stylesheet/Tasks.css'
import { AiTwotoneCloseCircle } from 'react-icons/ai';


function Tasks ( {id, text, compled, taskCompled, taskDelete } ) {

    
    return (
        <div className={compled ? 'tasks-container compled' : 
        'tasks-container'}>
            <div onClick={() => taskCompled(id)} className="tasks-text">
                {text}
            </div>
            <div onClick={() => taskDelete(id)} className="tasks-icons-container">
                <AiTwotoneCloseCircle className='delete-icon'/>
            </div>
        </div>
    )
}

export default Tasks;