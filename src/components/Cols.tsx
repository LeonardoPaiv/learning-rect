import React from 'react'

const Cols = (props: any) => {

    const title = props.title.toUpperCase()

  return (
    <div className="col md:col-4">
        <div className='surface-600 p-2 border-round-md'>{title}</div>
    </div>
  )
}

export default Cols