import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import './Login.css'
import ContributorCard from '../Components/ConributorCard'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=" + process.env.REACT_APP_CLIENT_ID + "&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-library-read%20user-read-recently-played"

export default function Login() {

    const [screenSizeStatus, setScreenSizeStatus] = useState(false);

    const windowResized = () => {
        if (window.innerWidth <= 980) {
            setScreenSizeStatus(true);
            document.getElementsByClassName('circleContainer1')[0].style.flexDirection = "column";
            document.getElementsByClassName('circleContainer2')[0].style.flexDirection = "column";
        } else if (window.innerWidth > 980){
            setScreenSizeStatus(false);
            document.getElementsByClassName('circleContainer1')[0].style.flexDirection = "unset";
            document.getElementsByClassName('circleContainer2')[0].style.flexDirection = "unset";
        }
    }
    

    window.addEventListener('resize', windowResized);
    

    return (
        <div className="container">
            
            <div className="contributors">
                <div style={{color: "white", border: "2px solid grey", borderRadius: "7px"}}><strong style={{fontSize: "20px", textDecoration: "underline"}}>! Instructions   </strong> <br/>This project is based on Spotify API so you will need a Premium Account of Spotify to Play Music</div>
                <div className="btn">
                    <Button href={AUTH_URL}>Login
                    </Button>
                </div>
                <h1 style={{marginTop: "30px", color: "black"}}>MIUZIK Team</h1>
                <div className="circleContainer1" style={{marginTop: "30px"}}>
                    <ContributorCard github="https://github.com/bhanupratapsinghcs" name="Bhanu Pratap Singh" userName="bhanupratapsinghcs" img="https://avatars.githubusercontent.com/u/44972186?v=4" />
                    <ContributorCard github="https://github.com/98prateeksharma" name="Prateek Sharma" userName="98prateeksharma" img="https://avatars.githubusercontent.com/u/45096975?s=400&u=f7abed5574df1f91bf9fb36c6e7ef9b6fb990652&v=4" />
                    <ContributorCard github="https://github.com/InLearningPhase" name="Tanesh Gupta" userName="InLearningPhase" img="https://media-exp1.licdn.com/dms/image/C4E03AQEKq-UhcMxKIg/profile-displayphoto-shrink_800_800/0/1606073798658?e=1625097600&v=beta&t=o56UEIQbQ9nM8H7Pq0T6cPuFzapwiWGSEs2AOvgh03A" />
                </div>
                <div className="circleContainer2" style={{marginTop: "30px"}}>
                    <ContributorCard github="https://github.com/vijaytyagi369" name="Vijay Kumar Tyagi" userName="vijaytyagi369" img="https://avatars.githubusercontent.com/u/45126731?v=4" />
                    <ContributorCard github="https://github.com/Abhi1599-axel" name="Abhishek Rathore" userName="Abhi1599-axel" img="https://avatars.githubusercontent.com/u/68775512?v=4" />
                </div>
            </div>
        </div>
    )
}
