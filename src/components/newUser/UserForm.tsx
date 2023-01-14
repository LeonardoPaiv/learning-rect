import React, { useState } from 'react'

import './userForm.scss'

const UserForm = (props: any) => {

  const [user, setUser] = useState('')
  const [idade, setIdade] = useState('')
  const [userValido, setUserValido] = useState(true)
  const [idadeValido, setIdadeValido] = useState(true)
  const [idadePositivo, setNumeroPositivo] = useState(true)

  const inputUserHandler = (event: any) => {
    if(event.target.value.length === 0) setUserValido(false)
    else setUserValido(true)
    setUser(event.target.value)
  }

  const inputIdadeHandler = (event: any) => {
    if(event.target.value.length === 0) setIdadeValido(false)
    else {
      setIdadeValido(true)
      setNumeroPositivo(true)
    }
    setIdade(event.target.value)
  }

  const submitFormHandler = (event: any) => {
    event.preventDefault()
    if (user.length === 0) return setUserValido(false)
    if (idade.length === 0) return setIdadeValido(false)
    if (0 > parseInt(idade)) return setNumeroPositivo(false)
    else{
      props.sobeUser(
        {user, idade: parseInt(idade)}
      )
      setUser('')
      setIdade('')
    } 
}

  return (
    <form className='p-2' onSubmit={submitFormHandler}>
      <div className='field'>
        <label htmlFor="userCadastro" className='block'>Cadastrar Usuario <span className='text-red-500'>*</span></label>
        {!userValido && <small className='text-red-200 block'>Usuario não pode ficar vazio</small>}
        <input type="text" className={`inputControl ${userValido ? '' : 'invalido'}`} value={user} onChange={inputUserHandler}/>
      </div>
      <div className='field'>
        <label htmlFor="userCadastro" className='block'>Cadastrar Idade <span className='text-red-500'>*</span></label>
        {!idadeValido && <small className='text-red-200 block'>Idade não pode ficar vazio</small>}
        {!idadePositivo && <small className='text-red-200 block'>Idade não pode ser menor que 0</small>}
        <input type="number" className={`inputControl ${idadeValido ? '' : 'invalido'} ${idadePositivo ? '' : 'invalido'}`} value={idade} onChange={inputIdadeHandler}/>
      </div>
        <button className='bg-green-300 border-none border-round w-4rem hover:bg-green-400'>teste</button>
    </form>
  )
}

export default UserForm