import React, { useState, useEffect } from 'react'
import './Header.css';
import * as Icons from '@material-ui/icons';
import * as CoreIcons from '@material-ui/core';
import { Link } from 'react-router-dom';
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResults from './Lists/TrackSearchResults'

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
})

function Header({ code, setTrack }) {

    // // const [btn, btnhandler]= useState('header_inputButton')

    /*      Related to Search Bar       */
    const accessToken = code;

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [user, setUser] = useState();
    const [userName, setUserName] = useState();

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
        spotifyApi.getMe()
            .then(function (data) {
                if (data.body.images[0] != undefined) {
                    setUser(data.body.images[0]["url"])
                }
                setUserName(data.body.display_name)
            }, function (err) {
                console.log('Something went wrong!', err);
            });
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return


        let cancel = false

        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return     /*    cancel is used to stop updating all the time while typing updates only when typing stops   */
            setSearchResults(

                res.body.tracks.items.map(track => {
                    const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                        if (image.height < smallest.height) return image
                        return smallest
                    }, track.album.images[0])  /*      here we are trying to return the smaller size image      */

                    return {
                        artist: track.artists[0].name,  /*       here we are lysting the information related to songs      */
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url
                    }
                })
            )
        })
        return () => cancel = true
    }, [accessToken, search])


    /*      handling clicks over the search bar and back button while inputting the text    */

    function handleClick() {
        const list = document.getElementsByClassName('header_list');
        list[0].style.display = 'none';
        const input = document.getElementsByClassName('header_input');
        input[0].style.display = 'flex';
    }

    function backToList() {
        const list = document.getElementsByClassName('header_list');
        list[0].style.display = 'flex';
        const input = document.getElementsByClassName('header_input');
        input[0].style.display = 'none';
        setSearchResults([]);           /*      making the search list empty whenever back arrow is clicked     */
        setSearch('');                  /*      # emptying the search query whenever the Search Bar is re-visited after clicking the back button      */
    }


    /*      Setting scroll effect over the navbar       */

    const [scrollStatus, setScrollStatus] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 0)  // 60 bcoz the height of the navbar is 60px 
        {
            setScrollStatus(true);
        } else
            setScrollStatus(false);
    }

    window.addEventListener('scroll', changeBackground);

    /*      Setting windows resizing effect to the navbar       */

    const [screenSizeStatus, setScreenSizeStatus] = useState(false);

    const windowResize = () => {
        if (window.innerWidth <= 930) {
            setScreenSizeStatus(true);
        } else
            setScreenSizeStatus(false);
    }

    window.addEventListener('resize', windowResize);


    return (
        <div className={scrollStatus ? 'header active' : 'header'}>
            <>
                <Link to='/' className="header_left">
                    <img className='header-logo' src="https://user-images.githubusercontent.com/868109/63057127-5d3e8780-be9e-11e9-9488-bf280a5ff1ed.png" alt="Header Youtube logo" />
                    <h1 className='header-logo-text'>Miuzik</h1>
                </Link>
            </>

            <div className="header_input">
                <Icons.KeyboardBackspace onClick={backToList} className='header_inputButton' />
                <input type="" placeholder="Search Songs/Artists" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="searchList">
                {searchResults.map(track => (
                    <TrackSearchResults track={track} setTrack={setTrack} key={track.uri} />
                ))}
            </div>

            {screenSizeStatus
                ?
                <ul className='header_list' style={{ minWidth: '250px' }}>
                    <li><Link to='/' className='anchor' >< Icons.Home /></Link></li>
                    <li><Link to='/Pages/Explore' className='anchor' >< Icons.Explore /></Link></li>
                    <li><Link to='/Pages/Library' className='anchor' >< Icons.LibraryMusic /></Link></li>
                    <li><Link to='#' onClick={handleClick} className='anchor' ><Icons.Search className='search-icon' /></Link></li>
                </ul>
                :
                <ul className='header_list' style={{ minWidth: '450px' }}>
                    <li><Link to='/' className='anchor' >Home</Link></li>
                    <li><Link to='/Pages/Explore' className='anchor' >Explore</Link></li>
                    <li><Link to='/Pages/Library' className='anchor' >Library</Link></li>
                    <li><Link to='#' onClick={handleClick} className='anchor' ><Icons.Search className='search-icon' />Search</Link></li>
                </ul>
            }

            <div className="header_icons">
                {/* <Icons.MoreVert className='threeDots' /> */}
                {user ?
                    <CoreIcons.Avatar className='signedIn' alt={userName} src={user} /> :
                    <p>{userName}</p>
                }

            </div>
        </div>
    )
}

export default Header
