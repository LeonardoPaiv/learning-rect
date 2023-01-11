import React from 'react'

import ColFom from './ColFom'

const NewCol = (props: any) => {

    const saveColDataHandler = (enteredColData: any) => {
        const colData = {
            ...enteredColData,
            id: Math.random().toString()
        };
        props.onAddCol(colData);
    }

  return (
    <div className='bg-primary p-2 border-round-md'>
        <ColFom onSaveColData={saveColDataHandler}/>
    </div>
  )
}

export default NewCol