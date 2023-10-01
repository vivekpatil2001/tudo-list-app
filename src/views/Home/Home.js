import React, { useState } from 'react';
import "./Home.css"
import Task from './../../component/Task/Task';


const Home = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            title: 'submit assignment',
            description: 'nahi to gali padegi',
            priority: 'high'
        },
       
      
       
        

    ])
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');

    const addTaskToList = () => {
        const randomId = Math.floor(Math.random()*100);
        const obj = {
            id: 'randomId',
            title: title,
            description:description,
            priority: priority,

             
        }
        setTaskList([...taskList, obj])

        setTitle('');
        setDescription('');
        setPriority('')
    }
 
    return (

        <div className='container'>
            <h1 className='app-title'>TUDO LIST 📑</h1>
            <div className='list-container'>
                <div>
                    <h2 className='text-center'> Show List</h2>
                    {
                        taskList.map((taskItem, index) => {
                            const { id, title, description, priority } = taskItem;

                            return <Task id={id} title={title} description={description} priority={priority} />
                        })
                    }

                </div>

                <div>
                    <h2 className='text-center'>  Add List {title}</h2>
                    <div className='form-container'>
                        <form>
                            <input type='text'
                                value={title}

                                className='input-box'
                                onChange={(e) => {
                                    setTitle(e.target.value)

                                }}
                                placeholder='Enter title'
                            />

                            <br />

                            <input
                                type='text'
                                className='input-box'
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                placeholder='Enter description'
                            />

                            <br></br>

                            <input type='text'
                                className='input-box'
                                value={priority}
                                onChange={(e) => {
                                    setPriority(e.target.value)
                                }}
                                placeholder='Enter priority'
                            />

                            <button type='button' onClick={addTaskToList} className='btn-add-task'>Add Task</button>
                        </form>

                    </div>


                </div>
            </div>
        </div>

    )
}

export default Home
