import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';

function Sidebar() {
    return (
        <div className='sidebar' >

            <h2>this is where side bar will go</h2>
            <SidebarRow Icon={ HomeIcon } title='Home'/>
            {/* <SidebarRow title='Explore'/>
            <SidebarRow title='Library'/> */}
            
        </div>
    )

}

export default Sidebar