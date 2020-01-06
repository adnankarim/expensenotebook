import React, { Component } from 'react'
import {
    FloatingMenu,
    MainButton,
    ChildButton,
  } from 'react-floating-button-menu';
  import MdAdd from '@material-ui/icons/Add';
  import MdClose from '@material-ui/icons/Clear';
  import {PieChart,Money} from '@material-ui/icons';
   import './FloatingNav.css'

 

export default class FloatingNav extends Component {
   constructor(props) {
       super(props)
   
       this.state = {

                 
            isOpen: false,
             
       }
    
   }
   
   
   
    render() {
        return (
            <div class="float-wrapper">
               <FloatingMenu
      slideSpeed={500}
      direction="right"
      spacing={8}
      isOpen={this.state.isOpen}
    >
     
      <MainButton
         title="Navigation Menu"
        iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="black" />}
        iconActive={<MdClose title="Close Navigation Menu" style={{ fontSize: 20 }} nativeColor="white" />}
        backgroundColor="black"
        onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        size={56}
      />
       <ChildButton
        icon={<Money style={{ fontSize: 20, color:`${this.state.colorAddPassed}`}} nativeColor="white" />}
        backgroundColor="white"
        size={40}
        title="Add Data"
        
        onClick={ this.props.handleAddChange }
      />
      <ChildButton
        title="Display Piechart"
        icon={<PieChart style={{ fontSize: 20,color:`${this.state.colorPiePassed}` }} nativeColor="black" />}
        backgroundColor="white"
        size={40}
        
        onClick={this.props.handlePieChange }
      />
      
    </FloatingMenu> 
            </div>
        )
    }
}



  
  
    