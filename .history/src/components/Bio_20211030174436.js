import {useState} from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';

function Bio () {


    const [clicked, setClicked] = useState(false)


    // function HideInfo () {
    //     if 
    // }


    function revealBio () {
        setClicked(!clicked)

        if (clicked === true) {
            return (
                <>
                    <p>I'm a Binghamton University graduate with a BA in Cinema and Philosophy.
                        I recently graduated from the Software Engineering Program at <span><a href="https://flatironschool.com/">Flatiron School </a></span>
                        There I learned:
                    </p>
                    <ul>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Ruby</li>
                        <li>Ruby on Rails</li>
                        <li>Sinatra</li>
                        <li>HTML</li>
                        <li>and CSS</li>
                    </ul>

                    <p>As someone with a strong interest in media, learning to code was an incredibly rewarding experience.
                        For me coding was the final building block that I needed in order to bridge all of my passions together.  
                        
                    </p>
                </>
            )
        }


    
    }
    return (
        <div className="bio-container">
            <h1>Welcome! My name is Naseer and I'm a Fullstack Software Engineer</h1>

            <div>
                <small>Click below to reveal more info</small>
                <Button variant="contained" onClick={revealBio}>Background </Button>
            </div>

        </div>
    )
}

export default Bio;