import React from 'react'
import './datatable.css'





const DataTable=(props) =>{
    return (
        <div ClassName='main'>
              <div className="main-panel">
            
                  { props.expenseItems.map((expenseItem) => (
              <div class="panel">
              <div class="panel__item panel__item-expense" id={expenseItem.id}>
                  <div class="panel__item__details">
                      <div class="panel__item__details-name">{expenseItem.description}</div>
                  </div>
                  <div class="panel__item__category">
                      <div class="panel__item__category-name">{expenseItem.category}</div>
                  </div>
                  <div class="panel__item__category">
                      <div class="panel__item__category-name">{expenseItem.time}</div>
                  </div>
                      <div class="panel__item__value">
                          <div class="panel__item__value-number">Rs. {expenseItem.cost}</div>
                      </div>
                          <button class="item__delete--btn" onClick={() => props.deleteExpenseItem(expenseItem.id) }>
                              
                              <div title="Delete Item">
                               <svg   class="icon_cr icon-cross">
                                   <use href="#icon-cross"/>
                                </svg>
                                </div>
                          </button>
                    </div>
              </div>
                  ))
                 }
                   
    
    
            </div>
        </div>
    )
}



export default DataTable

