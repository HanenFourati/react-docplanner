import React, { Component } from 'react';
import './SecondDiv.css';
import imglogo from './images/sygnet.png'
const theItems = [
    {
      title:'Making the healthcare experience more human',
     },
  ]
  let Item = (props) => 
  <div>
   <div> <img src={imglogo}/></div>
   <div> <h2>{props.item.title} </h2></div>
 </div>
 const Items = (props) =>
 props.itemsList.map((currentItem, i) =>
 <div  className="main-container" key={i}>
   <Item item={currentItem} />
 </div>
 )
    class SecondDiv extends Component {

  render() {
    return (
        <div className="SecondDiv">
          
        <Items itemsList={theItems} />

           
        
    </div>   
 
      
    );
  }
}

export default SecondDiv;
