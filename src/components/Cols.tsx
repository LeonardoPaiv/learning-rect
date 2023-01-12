import React, { useState } from 'react'

const Cols = (props: any) => {

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const [id, setId] = useState(props.id);

  return (
    <div className="col-12 md:col-4">
        <div key={props.id} className='surface-600 p-2 border-round-md flex justify-content-between'>
          <h2 className='text-xl'>{title}</h2>
          <h2 className='text-xl'>{amount}</h2>
        </div>
    </div>
  )
}

export default Cols