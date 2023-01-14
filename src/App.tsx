import React, { useState } from 'react'
import NewUser from './components/newUser/NewUser'
import Users from './components/users/Users'

const App = () => {

  const onAddUser = (user: {user: string, idade:  number}) => {
    setUsers(prev => [...prev, user])
  }

  const onRemoveUser = (index: number) => {
    const newArray = users.filter((item, i) => i !== index)
    setUsers(newArray)
  }

  const [users, setUsers] = useState<{user: string, idade:  number}[]>([])

  return (
    <div className='flex flex-column justify-content-center align-items-center mt-5'>
      <NewUser sobeUser={onAddUser} />
      <Users users={users} deleteUser={onRemoveUser} />
    </div>
  )
}

export default App