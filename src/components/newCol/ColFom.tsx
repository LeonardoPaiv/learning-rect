import React, { useState } from "react";

const ColFom = (props: any) => {

    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [amount, setAmount] = useState('')

    const [userInput, setUserInput] = useState({
        title: '',
        amount: ''
    })

    const titleChangeHandler = (event: any) => {
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value}
        })
        // setUserInput({
        //     ...userInput,
        //     title:event.target.value
        // })
    }

    const amountChangeHandler = (event: any) => {
        setUserInput((prevState) => {
            return { ...prevState, amount: event.target.value}
        })
        // setUserInput({
        //     ...userInput,
        //     amount:event.target.value
        // })
    }

    const submitHandler = (event: any) => {
        event.preventDefault();
        props.onSaveColData(userInput)
        setUserInput({amount: '', title: ''})
    }

    const cancelHandler = () => {
      props.onCancelForm()
    }

  return (
    <div className="flex flex-column text-center m-0 p-2">
      <form onSubmit={submitHandler}>
        <div className="field">
            <label htmlFor="title" className="block">Title:</label>
            <input type="text" className="w-11" value={userInput.title} onChange={titleChangeHandler} />
        </div>
        <div className="field">
            <label htmlFor="amount" className="block">Amount:</label>
            <input type="number" className="w-11" value={userInput.amount} onChange={amountChangeHandler} />
        </div>
              <button className="w-11 h-2rem mb-2 border-none border-round-lg md:surface-300 hover:surface-400">Create</button>
      </form>
      <button onClick={cancelHandler} className="w-11 h-2rem m-auto border-none border-round-lg bg-red-400 hover:bg-red-500 ">Cancel</button>
    </div>
  );
};

export default ColFom;
