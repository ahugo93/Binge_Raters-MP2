import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './NavBar.css'
import { Button } from '../Button/Button'

class Navbar extends Component{
    state = { clicked: false}

    handleClick= () => {
        this.setState({ clicked: !this.state.clicked})
    }



    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'> Binge Raters🎬 </h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-manu active' : 'nav-menu'}>
                  {MenuItems.map((item,index) => {
                     return(
                         <li key={index}>
                            <a className={item.cName} href={item.url} >
                                 {item.title}
                             </a>
                         </li>
                            )
                        })}
                       
                   
                </ul>
                <Button children={undefined} type={undefined} onClick={undefined} buttonStyle={undefined} buttonSize={undefined}/>
            </nav>
        )
    }
}

export default Navbar