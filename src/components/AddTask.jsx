import React, {useState} from 'react';

import Button from './Button';
import "./addTask.css";

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const hendleInputChange =(e) => {
        setInputData(e.target.value)
    };

    const handleAddTaskClic = () => {
        handleTaskAddition(inputData)
    };

    return ( 
        <div className='add-task-container'>

            <input onChange={hendleInputChange} 
            value={inputData}
            className='add-task-input' 
            type="text" />
            <div className="add-task-button-containder">
                <Button onClick={handleAddTaskClic}>Adicionar</Button>
            </div>

        </div>        
    );
};
 
export default AddTask;