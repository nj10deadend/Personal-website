import {useState} from 'react';

import Button from '@material-ui/core/Button';

function Bio () {


    const [clicked, setClicked] = useState(false)


    // function HideInfo () {
    //     if 
    // }


    function revealBio () {
        setClicked(!clicked)

        if (clicked === true) {
            return (
                <p>I'm a Binghamton University graduate with a BA in Cinema and Philosophy.
                    I recently completed the Software Engineering Program at <span><a href="https://flatironschool.com/">Flatiron School </a></span>
                    
                </p>
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