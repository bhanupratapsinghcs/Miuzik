import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Header() {
    return (
        <div className='header'>
            <div className="header_left">
                <MenuIcon className='menuIcon' />
                <img className='header-logo' src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Youtube_Music_logo.svg" alt="Header Youtube logo"/>
                <h1 className='header-logo-text'>Music</h1>
            </div>
            
            <div className="header_input">
                <input type="text" placeholder="Search" />
                <SearchIcon className='header_inputButton' />
            </div>
            
            <div className="header_icons">
                <MoreVertIcon className='threeDots' />
                <Avatar className='signedIn' alt="prateek sharma" src="https://avatars.githubusercontent.com/u/45096975?s=400&u=f7abed5574df1f91bf9fb36c6e7ef9b6fb990652&v=4" />
            </div>
        </div>
    )
}

export default Header
