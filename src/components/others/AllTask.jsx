import React, { useContext } from 'react';
import {AuthContext} from '../../context/AuthProvider';

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)


  return (
    <div className='p-5 bg-[#1c1c1c] rounded mt-5'>
        <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
        {userData.map(function(ele,idx){
            return <div key={idx} className='border-2 border-emerald-400 py-2 px-4 mb-2 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>{ele.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{ele.taskCount.newTask}</h3>
            <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{ele.taskCount.active}</h3>
            <h5 className='text-lg font-medium w-1/5 text-white'>{ele.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-400'>{ele.taskCount.failed}</h5>
        </div>
        })}
        </div>
    </div>
        
  )
}

export default AllTask;