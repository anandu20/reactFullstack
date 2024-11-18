import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
    const [task,setTask]=useState('');
    const [todo,setTodo]=useState([]);
    const addTask=async()=>{
      if (task.trim()){
        const res=  await fetch('http://localhost:3000/api/addtodo',
          {

          method:"POST",
          headers:{"Content-Type":"Application/json"},
          body:JSON.stringify({task})

        }
      )
      const data =await res.json();
      res.status==201?alert(data.msg):alert(data.msg)
      getTodos();

      }
    }
    const getTodos=async()=>{
      const res=await fetch ('http://localhost:3000/api/gettodos')
      const dats=res.json()
      if(res.status==200){
        setTodo([...data])  //copy all todo data
      }
      else{
        alert(data.msg)
      }
    }
    const deleteTask=async()=>{
      const res=await fetch  (`http://localhost:3000/api/deletetodo/${task}`,
        {
          method:"POST",
          headers:{"Content-Type":"Application/json"},
        }
      )
      getTodos();
    }
    useEffect(()=>{  //useeffect is work first and it will hit the gettodos function an dget all the todo datas
      getTodos();  
    },[])

  return (
    <div className="todos">
      <h1 className='hed'>Todo List</h1>
      <div className='todo-form'>
      <input type="text" placeholder="Enter your task" onChange={(e)=>setTask(e.target.value)} className="inp" />
      <button onClick={addTask} className="todo_btn"> Add List</button>
      </div>
      <ul className="todo-list">

        {
           todo.map((task)=><li className='todo-item'>{task.task} <button className='todo-delete-btn' onClick={()=>deleteTask(task._id)}>Delete</button></li>)
        }

      </ul>

    </div>
   
  )
}

export default App
