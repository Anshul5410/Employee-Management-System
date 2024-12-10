import React from 'react'
const NewTask = ({data}) =>{
    return(
        <div className='h-full flex-shrink-0 w-[300px] bg-green-400 p-5 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-xxl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className='mt-4'>
                <button className='bg-green-500 px-2 py-1 text-sm'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask;