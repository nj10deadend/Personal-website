import { Typography } from "@material-ui/core";
import BikiniBottomGame from "../Demos/Bikini Bottom Adventures Demo.mp4"
import DuskDemo from "../Demos/Dusk demo_1.mp4"
import styled from '@emotion/styled'

const Video = styled('video')`
    max-width: 500px;

`


function TechnicalProject () {
    return (
        <div className="technical-project-container">
            <Typography variant="h2" component="div" gutterBottom>
                Here are some projects that I've made
            </Typography>

            <div className="technical-projects">
                <div className="Dusk">
                    <Video muted autoPlay loop >
                        <source src={DuskDemo} type="video/mp4" />
                    </Video>
                    <Typography variant="p" component="div" gutterBottom>
                    Dusk is a choose-your-own adventure game that immerses the user in a rogue-like, fantasy story. 
                    Users can create characters with unique properties that change how they interact with the story. 
                    The game has multiple endings and encourages users to keep playing in order to uncover all that the world has to offer.
                    </Typography>
                    <Typography variant="p" component="div" gutterBottom>
                        Github: <a href="https://github.com/nj10deadend/phase-5-project" target="_blank">code</a>
                    </Typography>

                </div>
                {/* <hr></hr> */}
                <div className="Bikini Bottom Towers">
                    <Video muted autoPlay loop >
                        <source src={BikiniBottomGame} type="video/mp4" />
                    </Video>
                    <Typography variant="p" component="div" gutterBottom>
                    A choose-your-own adventure game based on the Spongebob universe. 
                    The user has the freedom to choose between various options in order to progress through the story.  
                    </Typography>

                </div>

            </div>
            


        </div>
    )
}

export default TechnicalProject;