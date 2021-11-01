import {useState} from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';

function Bio () {


    const [clicked, setClicked] = useState(false)
    // const [backgroundBttnText, setBackgroundBttnText] = useState("Background")

    const backgroundBttnText = clicked ? "Hide Background" : "Background"


    // function HideInfo () {
    //     if 
    // }


    console.log(clicked)
    return (
        <div className="bio-container">
            {/* <h1>Welcome! My name is Naseer and I'm a Fullstack Software Engineer</h1> */}
            <Typography variant="h1" component="div" gutterBottom>
                Welcome! My name is Naseer and I'm a Fullstack Software Engineer
            </Typography>

            <div>
                <div>Click below to reveal more info</div>
                <Button variant="contained" color="primary"onClick={()=> {setClicked(!clicked)}} >{backgroundBttnText}</Button>
                {clicked && (

                    <div>
                        <Typography variant="p" component="div" gutterBottom>
                            I'm a Binghamton University graduate with a BA in Cinema and Philosophy.
                            I recently graduated from the Software Engineering Program at <span><a href="https://flatironschool.com/" target="_blank">Flatiron School. </a></span>
                            There I learned:
                        </Typography>
                        <Typography variant="ul" component="div" gutterBottom>
                            <Typography variant="li" component="div" gutterBottom>
                                Javascript
                            </Typography>
                            <Typography variant="li" component="div" gutterBottom>
                                React
                            </Typography>
                            <Typography variant="li" component="div" gutterBottom>
                                Ruby
                            </Typography>
                            <Typography variant="li" component="div" gutterBottom>
                                Ruby on Rails
                            </Typography>
                            <Typography variant="li" component="div" gutterBottom>
                                Sinatra
                            </Typography>
                            <Typography variant="li" component="div" gutterBottom>
                                HTML
                            </Typography>
                            <Typography variant="li" component="div" gutterBottom>
                                Sinatra
                            </Typography>
                            <Typography variant="li" component="div" gutterBottom>
                                and CSS
                            </Typography>
                        </Typography>

                        <p>As someone with a strong interest in media, learning to code was an incredibly rewarding experience.
                            For me coding was the final building block that I needed in order to bridge all of my passions together.  
                            
                        </p>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Bio;