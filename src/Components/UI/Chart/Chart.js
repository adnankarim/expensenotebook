import React from 'react'
import { Pie } from 'react-chartjs-2';


const Chart =(props)=> {
   
  

    const data ={
        labels: ['Food', 'Entertainment', 'Utility', 'Other'],
        datasets:[
          {
            label:'Category',
            data:props.categoryCost,
            backgroundColor:[
              "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"
            ]
          }
        ]
      };
      const option = {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat((currentValue/total*100).toFixed(1));
              return currentValue + ' (' + percentage + '%)';
            },
            title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }
          }
        },title:{
            display:true,
            text:'Displaying Cost By Category'  ,
            fontSize:25
          },
          legend:{
            display:true,
            position:'right'
          }
      }
        return (
            <div ClassName='main'>
              <div className="main-panel">
              
                    <form onSubmit={props.displayChart}>

              <div class="input__last">
           
           <div className="input_date_container">
           <label className="form_label" for="time"> Select Date to Display Chart </label>
       
           <input required className="form__input" type="date" id="SelectedDay"
              name="SelectedDay"  value={props.SelectedDay} onChange={props.handleInputChange} />
          
               
               </div>

               <button  title="Display by that day" type="submit"  className="input_submit_container">
               <div className="input__submit">
               <svg  color="red" class="icon icon-checkmark">
                 <use href="#icon-checkmark"/>
                 
                 </svg>
                </div>
               </button>
            
               </div>

               </form>
            { 
            
            (props.categoryCost[0]==0 && props.categoryCost[1]==0 && props.categoryCost[2]==0 && props.categoryCost[3]==0) ? <h1>No Data Found</h1> :         
                      <Pie
            data={data}
            options={option}
       />


           } 
              </div>
                
            </div>
        )
    }


    export default Chart;

