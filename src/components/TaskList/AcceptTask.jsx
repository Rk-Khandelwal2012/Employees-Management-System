import React from 'react';

const AcceptTask = ({ data, onUpdateStatus }) => {
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-violet-700 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
          <h4 className='text-base'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='flex justify-between mt-4'>
          <button
            className='bg-green-500 py-1 px-2 text-sm'
            onClick={() => onUpdateStatus(data.id, 'completed')}
          >
            Mark as Completed
          </button>
          <button
            className='bg-red-500 py-1 px-2 text-sm'
            onClick={() => onUpdateStatus(data.id, 'failed')}
          >
            Mark as Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
