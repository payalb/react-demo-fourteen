import React, { Component } from 'react'
import Greet from './Greet';
import Test from './Test';

class ParentComp extends Component {

   constructor(props) {
      super(props)
    
      this.state = {
         name1: "Payal"
      }
    }

 render() {
   return (
   <>
   <h2>{this.state.name1}</h2>
   <Test attr= {this.state.name1}/>
   <Greet attr= {this.state.name1}/>
   </>
   )
 }

 componentDidMount(){
   setInterval(()=> {
      this.setState({name1: "Payal" })
   }, 2000);
 }
}

export default ParentComp
