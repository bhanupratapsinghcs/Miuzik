import React ,{useState} from 'react'
import './Header.css';
import * as Icons from '@material-ui/icons';
import * as CoreIcons from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {

// // const [btn, btnhandler]= useState('header_inputButton')

/*      handling clicks over the search bar and back button while inputting the text    */

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


/*      Setting scroll effect over the navbar       */

const [scrollStatus, setScrollStatus] = useState(false);

const changeBackground = () => {
    if (window.scrollY > 0)  // 60 bcoz the height of the navbar is 60px 
    {
        setScrollStatus(true);
    }else
        setScrollStatus(false);
}

window.addEventListener('scroll', changeBackground);   

/*      Setting windows resizing effect to the navbar       */

const[screenSizeStatus, setScreenSizeStatus] = useState(false);

const windowResize = () => {
    if (window.innerWidth <= 930){
        setScreenSizeStatus(true);
    }else
        setScreenSizeStatus(false);
}

window.addEventListener('resize', windowResize);


    return (
        <div className={scrollStatus ? 'header active' : 'header'}>
            <>
                <Link to='/Pages/Home' className="header_left">
                    <img className='header-logo' src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Youtube_Music_logo.svg" alt="Header Youtube logo"/>
                    <h1 className='header-logo-text'>Music</h1>
                </Link>
            </>
            
            <div className="header_input">
                <Icons.KeyboardBackspace onClick={backToList} className='header_inputButton' />
                <input type="text" placeholder="Search" />
            </div>

            {screenSizeStatus
            ?
            <ul className='header_list' style={{minWidth: '250px'}}>
                <li><Link to='/Pages/Home' className='anchor' >< Icons.Home /></Link></li>
                <li><Link to='/Pages/Explore' className='anchor' >< Icons.Explore /></Link></li>
                <li><Link to='/Pages/Library' className='anchor' >< Icons.LibraryMusic /></Link></li>
                <li><Link to='#' onClick={handleClick} className='anchor' ><Icons.Search className='search-icon'/></Link></li>
            </ul>
            :
            <ul className='header_list' style={{minWidth: '450px'}}>
                <li><Link to='/Pages/Home' className='anchor' >Home</Link></li>
                <li><Link to='/Pages/Explore' className='anchor' >Explore</Link></li>
                <li><Link to='/Pages/Library' className='anchor' >Library</Link></li>
                <li><Link to='#' onClick={handleClick} className='anchor' ><Icons.Search className='search-icon'/>Search</Link></li>
            </ul>
            }
            
            <div className="header_icons">
                <Icons.MoreVert className='threeDots' />
                <CoreIcons.Avatar className='signedIn' alt="prateek sharma" src="https://avatars.githubusercontent.com/u/45096975?s=400&u=f7abed5574df1f91bf9fb36c6e7ef9b6fb990652&v=4" />
            </div>
        </div>
    )
}

export default Header
