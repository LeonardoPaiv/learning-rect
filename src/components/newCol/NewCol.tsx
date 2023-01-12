import React, { useState } from 'react'

import ColFom from './ColFom'

const NewCol = (props: any) => {

  const [createNew, setCreateNew] = useState(false)

  const cancelHandler = () => {
    setCreateNew(prev => !prev)
  }

  const saveColDataHandler = (enteredColData: any) => {
      const colData = {
          ...enteredColData,
          id: Math.random().toString()
      };
      props.onAddCol(colData);
      cancelHandler()
  }

  const classButton = 'pr-2 pl-2 pt-1 pb-1 border-none border-round bg-orange-500 text-white hover:bg-orange-700'

  if(createNew) {
    return <div className='bg-primary border-round-md'>
      <ColFom onSaveColData={saveColDataHandler} onCancelForm={cancelHandler}/>
    </div>
  }

  else return <div className='bg-primary border-round-md p-2 text-center'>
    <button className={classButton} onClick={cancelHandler}>Create Col</button>
  </div>
}

export default NewCol