import React from 'react'
import UserForm from './UserForm'

const NewUser = (props: any) => {

  return (
    <div className='bg-primary w-full border-round md:w-6'>
        <UserForm sobeUser={props.sobeUser} />
    </div>
  )
}

export default NewUser