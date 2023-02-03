import react, { useState } from 'react';

import  './ExpenseForm.css';


const ExpenseForm=(props) => {

    /*state declaration for 3 event storing*/
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

                      /*or*/
    // // const[userInput,setUserInput]=useState({
    // //  enteredztitle:'',
    // // enteredAmount:'',
    // // enteredDate:''})

    /*eventListener after inputing in title */
    const titleChangeHandler = (event) => {
            setEnteredTitle(event.target.value);
    };

    /*eventListener after inputing in amount */
    const amountChangeHandler =(event)=>{
        setEnteredAmount(event.target.value);
    }

    /*eventListener after inputing in date*/
    const dateChangeHandler =(event)=>{
        setEnteredDate(event.target.value);
    }

    const submitHandler=(event)=>{
            event.preventDefault();   //for preventing browerser from defaultly loading 
                                     //the page after entering the submit button                   
            const expenseData={           //for storing the data of form 
                title :enteredTitle,
                amount: enteredAmount,
                date :new Date(enteredDate)
            };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    
    return (
        <form  onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                <label>title</label>
                <input 
                   type='text'
                   value={enteredTitle}
                   onChange={titleChangeHandler}
                 />
                </div>

                <div className='new-expense__control'>
                <label>amount</label>
                <input 
                type='number'
                 value={enteredAmount} 
                 min='0.01' step='0.01' 
                 onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                <label>date</label>
                <input
                  type='date'
                   value={enteredDate}
                   min="2022-01-01" 
                   max="2023-12-31"
                   onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expenses</button>
            </div>
           
        </form>
    )
};
export default ExpenseForm;