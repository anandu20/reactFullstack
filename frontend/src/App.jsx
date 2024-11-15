import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <div className="todos">
      <h1 className='hed'>Todo List</h1>
      <div className='todo-form'>
      <input type="text" placeholder="Enter your task" className="inp" />
      <button className="todo_btn"> Add List</button>
      </div>

   

    </div>
   
  )
}

export default App
