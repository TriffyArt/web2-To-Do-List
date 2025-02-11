import React from 'react';

function Task(props) {
  return (
    <div className=' w-full h-36 flex justify-center'>
      <ul className='w-[60%] h-full flex flex-col gap-1.5'>
        {
          props.task.map((task, index) => (
            <div key={index} className=' w-6/6 h-9 border-b flex items-center border-pink-400'>
              <input type="checkbox" className=' w-6 h-6 mr-5 '/> 
              <p className='font-bold text-'>{task.task}</p>
            </div>
          ))
        }
      </ul>
    </div>
  );
}

export default Task;