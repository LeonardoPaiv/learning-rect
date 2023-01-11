import React, { useState } from 'react'

const Cols = (props: any) => {

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('Update')
  }

  return (
    <div className="col md:col-4">
        <div className='surface-600 p-2 border-round-md flex justify-content-between'>
          <h2 className='text-xl'>{title}</h2>
          <h2 className='text-xl'>{amount}</h2>
          <button className='bg-primary border-none p-1' onClick={clickHandler}>tetse</button>
        </div>
    </div>
  )
}

export default Cols