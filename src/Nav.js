import React, { Component } from 'react';
import './Nav.css';
import logoimg from './images/logo-default-group-en.svg'; 
const theButtons = [
    {
      value: 'About us',
     },
     {
     value: 'Career',
     },
     {
     value: 'Department',
     },
  ]
 
let Button = (props) => 
 
            <li> <a href="#"  className="hl1">{props.button.value
            }</a> </li>
                   
                
const Buttons = (props) =>

            props.buttonsList.map((currentButton, i) =>
            <ul  id="header-list" key={i}>
              <Button button={currentButton} />
            </ul>
            )
class Nav extends Component {

                render() {
                    return (
                      <div className="Nav_bar_style">
                        
                            <div className="header-container" id="sticky">
                            <img id="logo-header-image" src={logoimg} />
                            <Buttons buttonsList={theButtons} />

                               
                            
                        </div>   
                        
                      </div>
                    );
                  }
    
 
}

export default Nav;
