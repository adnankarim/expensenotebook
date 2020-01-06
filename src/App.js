import React,{Component} from 'react';
import './App.css';
import AddExpenseItem from './Components/UI/AddExpenseItem';
import DataTable from './Components/UI/DataTable/DataTable';
import Chart from './Components/UI/Chart/Chart';
import FloatingNav from './Components/UI/FloatingNav/FloatingNav';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      id: null,
      userId: 1,
      currentStatus:'add',
      description: '',
      cost: '',
      SelectedDay:'',
      category:'Other',
      time:'',
      categoryCost: [],
      expenseItem: {},
      expenseItems: [],

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addExpenseItem = this.addExpenseItem.bind(this);
    this.deleteExpenseItem = this.deleteExpenseItem.bind(this);
    this.displayChart = this.displayChart.bind(this);
    this.Calculator = this.Calculator.bind(this);
    this.handlePieChange = this.handlePieChange.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
  }

 handlePieChange(){
   this.setState({currentStatus:'pie'})

 }
 handleAddChange(){
this.setState({currentStatus:'add'})
 }
  handleInputChange(event) {
    
    const target = event.target;
    const value = target.value;
    const name = target.name;
 
    this.setState({
      [name]:value
    })
  }
  addExpenseItem(event){
    event.preventDefault()
    if (!this.state.description) return;
    const expenseItem = {
      id: this.state.expenseItems.length + 1,
      description: this.state.description,
      cost: this.state.cost,
      time:this.state.time,
      category:this.state.category,
      userId: this.state.userId,
    };
  
    this.setState({
      description: '',
      cost: '',
      category: 'Other',
      expenseItem: expenseItem,
      expenseItems: [...this.state.expenseItems, expenseItem]
    })
  }
  deleteExpenseItem(id) {
    const expenseItemsList = this.state.expenseItems.filter( item => item.id !== id );
    this.setState({expenseItems: expenseItemsList});
  }
   Calculator() {
    const filterDays = this.state.expenseItems.filter( item => item.time === this.state.SelectedDay );
    var count=[0,0,0,0]; 
       for( var i=0;i<filterDays.length;i++){
         
           if(filterDays[i].category==='Food'){
             count[0]=Number(count[0])+Number(filterDays[i].cost);
           }
             else if (filterDays[i].category==='Entertainment'){
              count[1]=Number(count[1])+Number(filterDays[i].cost);

             } 
             else if (filterDays[i].category==='Utility'){
              count[2]=Number(count[2])+Number(filterDays[i].cost);

             }
             else if(filterDays[i].category==='Other')
             {
              count[3]=Number(count[3])+Number(filterDays[i].cost);

             }
            
            }
          this.setState({categoryCost:[...count,]});
          
  }
  displayChart(event){
    event.preventDefault();
    this.Calculator();
          }

        
 
  
  

  render(){
    const { cost, description,time,category, expenseItems } = this.state;


return (
  <div >
      
      
       <FloatingNav
           handleInputChange={this.handleInputChange}
         currentStatus={this.state.currentStatus}
         handleAddChange={this.handleAddChange}
         handlePieChange={this.handlePieChange}
         
       
       />

      {
      this.state.currentStatus==='add'?
     
     
     ( <div> <AddExpenseItem
        description={description}
        cost={cost} 
        time={time}
        category={category}
        handleInputChange={this.handleInputChange} 
        addExpenseItem={this.addExpenseItem}
       
      />
      
      <DataTable 
        
        expenseItems= {expenseItems} 
        deleteExpenseItem={this.deleteExpenseItem}
      />
      </div>
     ) : this.state.currentStatus==='pie'?
      (<Chart  categoryCost={this.state.categoryCost}
              displayChart={this.displayChart}
              handleInputChange={this.handleInputChange} 
      
      />)
      : this.setState({currentStatus:'add'})
     }
    
   
  </div>
);
  }
}

export default App;
