import React, { useState } from "react";

const ColFom = (props: any) => {

    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [amount, setAmount] = useState('')

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        amount: ''
    })

    const titleChangeHandler = (event: any) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value}
        })
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
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
        setUserInput({amount: '', enteredTitle: ''})
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="formgrid grid">
        <div className="col flex flex-column">
          <label htmlFor="title">Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
          <label htmlFor="amount">Amount</label>
          <input type="number" value={userInput.amount} onChange={amountChangeHandler} />
        </div>
        <div className="col">
            <button className="w-full h-full border-none border-round-lg hover:surface-400">Create</button>
        </div>
      </div>
    </form>
  );
};

export default ColFom;
