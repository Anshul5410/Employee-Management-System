import React from 'react';

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className='p- py-5 px-9 rounded-xl w-[45%] bg-blue-400'>
            <h2 className='text-3xl font-bold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='p- py-5 px-9 rounded-xl w-[45%] bg-green-400'>
            <h2 className='text-3xl font-bold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>Complete Task</h3>
        </div>
        <div className='p- py-5 px-9 rounded-xl w-[45%] bg-yellow-400'>
            <h2 className='text-3xl font-bold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='p- py-5 px-9 rounded-xl w-[45%] bg-red-400'>
            <h2 className='text-3xl font-bold'>{data.taskCount.failed}0</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers;