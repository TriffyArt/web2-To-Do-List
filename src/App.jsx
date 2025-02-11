import React from "react";
import Header from './components/header'
import Task from "./components/Task"
import Buttons from './components/button'


function App() {

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-pink-300'>
    <div className='w-[50%] rounded-2xl bg-pink-200 shadow-pink-400 shadow-[0_25px_75px]'>
      <Header />
      <Task
        task={
          [
            {task: "Learn React"},
            {task: "Build a To-Do List"},
            {task: "Master JavaScript"},
            {task: "Apply for Jobs"}
          ]
        }/>
         < Buttons />
    </div>
    {/*Pa Plug lng ng Art Page Sir Pa follow na rin THENK YOU!! - Psalm*/}
    <h5 className="text-white">FB: @TriffyArts</h5>
  </div>
  )
}

export default App
