import React from 'react'
import './AddExpenseItem.css'

const AddExpenseItem=(props)=> {
    return (
      <form onSubmit={props.addExpenseItem}>
        <div ClassName='main'>
              <div className="main-panel">

              <div className="input">
          <div className="input__description">
            <input type="text" id="description" name="description" value={props.description} onChange={props.handleInputChange}
               className="add__description form__input" placeholder="Add description" required />
            <label for="description" className="form__label">Add a description</label>
          </div>
          <div className="input__value">
            <input type="number" id="value" name="cost" value={props.cost} onChange={props.handleInputChange} required className="add__value form__input" placeholder="Cost " />
            <label for="value" className="form__label">Cost</label>
          </div>
          <div className="input__category">
            <div className="radio_item">
          <input type="radio" name='category' value="Food" id="food"  onChange={props.handleInputChange}  checked={props.category === "Food"} className="category-radio" />
            <label for="food">Food</label>
            </div>
          <div className="radio_item">
          <input type="radio" name='category' value="Entertainment" id="entertainment" onChange={props.handleInputChange} checked={props.category === "Entertainment"} className="category-radio" />
            <label for="entertainment">Entertainment</label>
          </div> 
          <div className="radio_item">
          <input type="radio" name='category' value="Utility" id="utility" onChange={props.handleInputChange} checked={props.category === "Utility"} className="category-radio" />
            <label for="utility">Utility</label>
          </div> 
          
           
         
            <div className="radio_item">
          <input type="radio" name='category' value="Other" id="other" onChange={props.handleInputChange} checked={props.category === "Other"} className="category-radio" />
            <label for="other">Other</label>


            </div>
           

          </div>
        
          
        </div>
             
        <div class="input__last">
           
    <div className="input_date_container">
    <label className="form_label" for="time"></label>

    <input required className="form__input" type="date" id="time"
       name="time"  value={props.time} onChange={props.handleInputChange} />

        
        </div>
        <button   type="submit" className="input_submit_container">
        <div  title="Add Expense Item" className="input__submit">
        <svg  color="red" class="icon icon-checkmark">
          <use href="#icon-checkmark"/>
          
          </svg>
         </div>
        </button>
        
        
        
        </div>
             
              </div>
        
         
        
        
            
        </div>

        </form>
    )
}

export default AddExpenseItem;
