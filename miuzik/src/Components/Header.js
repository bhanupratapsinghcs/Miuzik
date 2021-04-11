import React ,{useState} from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function Header() {

// // const [btn, btnhandler]= useState('header_inputButton')

function handleClick() {
     const list = document.getElementsByClassName('header_list');
     list[0].style.display= 'none';
     const input = document.getElementsByClassName('header_input');
     input[0].style.display = 'flex';
}

function backToList() {
    const list = document.getElementsByClassName('header_list');
    list[0].style.display= 'flex';
    const input = document.getElementsByClassName('header_input');
    input[0].style.display = 'none';
}

    return (
        <div className='header'>
            <div className="header_left">
                <img className='header-logo' src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Youtube_Music_logo.svg" alt="Header Youtube logo"/>
                <h1 className='header-logo-text'>Music</h1>
            </div>
            
            <div className="header_input">
                <KeyboardBackspaceIcon onClick={backToList} className='header_inputButton' />
                <input type="text" placeholder="Search" />
            </div>

            <ul className='header_list'>
                <li><a className='anchor' >Home</a></li>
                <li><a className='anchor' >Explore</a></li>
                <li><a className='anchor' >Library</a></li>
                <li><a onClick={handleClick} className='anchor' ><SearchIcon className='search-icon'/>Search</a></li>
            </ul>
            
            <div className="header_icons">
                <MoreVertIcon className='threeDots' />
                <Avatar className='signedIn' alt="prateek sharma" src="https://avatars.githubusercontent.com/u/45096975?s=400&u=f7abed5574df1f91bf9fb36c6e7ef9b6fb990652&v=4" />
            </div>
        </div>
    )
}

export default Header
