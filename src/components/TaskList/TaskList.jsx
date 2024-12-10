import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompletedTask from './CompleteTask';

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='text-white h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5'>
      {data.tasks.map((ele, idx) =>{

        if(ele.active){
          return <AcceptTask key={idx} data={ele}/>
        }
        if(ele.NewTask){
          return <NewTask key={idx} data={ele}/>
        }
        if(ele.completed){
          return <CompletedTask key={idx} data={ele}/>
        }
        if(ele.failed){
          return <FailedTask key={idx} data={ele}/>
        }
      })}
    </div>
  )
}

export default TaskList;