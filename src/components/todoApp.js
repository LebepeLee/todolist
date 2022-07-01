import React, { useState } from 'react'
import './Todo.css';
import {GrTrash} from 'react-icons/gr'
import {FcApprove} from 'react-icons/fc'
import {BsFillPatchCheckFill} from 'react-icons/bs'

export default function Todo(){

    const [task, setTask] = useState('')
    const [tasklist, setTasklist] = useState([])
    console.log(tasklist)

    const addTask = ()=>{
        if (task !== ''){
            const taskDetails = {
                id:tasklist.length+1,
                task:task,
                color: {
                    backgroundColor: '#852747',
                },
                completed: false,
                important: false
            
            }
            setTasklist([...tasklist, taskDetails])
            
        }
    }
    const deleteTask = (id)=> {
        setTasklist(items=>items.filter((item)=>item.id !== id))
    }

    function toggleComplete(id){
        setTasklist(items=>
            items.map(item=>{
                if(item.id===id){
                    return{
                        ...item,
                        completed: true
                    }
                    
                }
                return item
            })
        )
        console.log(tasklist);
    }
    
 function changeColor (id){
    setTasklist(items=>
        items.map(item=>{
            if(item.id===id){
                if(item.color.backgroundColor === '#852747'){
                    return{
                        ...item,
                        color: {backgroundColor: '#FFF6CD'}
                        
                    }
                }else{
                    return{
                        ...item,
                        color: {backgroundColor: '#D4D925'}
                    }
                }
                
            }
            return item
        })
    )
 }
    return (
        <div className='main'>
        <div  className='container'>
            <h1>Todo List</h1><br></br>
            <input type ='text'
            onChange={(e)=>setTask(e.target.value)}
             placeholder='Enter your task'/><br></br>
             <button className='add-btn'onClick={addTask}>Add Task</button><br></br>
                <div  style={task.important ? { border: "4px solid green", color: "white", background: "green",border: "2px solid black" } : {}}>
             {tasklist !==[] ?
                <ul>
                    {tasklist.map(item=>
                    <div className={item.completed ? "listItem-important" : "listItem"} key={item.id}>
                         <li  
                        style={{
                            color: 'white',
                            textDecoration: item.completed ? 'line-through' : 'none'
                        }}
                        >{item.task} </li>
                        <div className='important' style={item.color} onClick={()=>changeColor(item.id)}></div>
                        <GrTrash style={{ marginRight: 5 }} className='delete' onClick={()=>deleteTask(item.id)} />
                        <BsFillPatchCheckFill style={{ marginRight: 5 }}className='complete' onClick={()=>toggleComplete(item.id)}/>
                    
                    </div>
                       
                        
                        )}
                </ul>

             :null}
                </div>
             </div>
        </div>
    )
}