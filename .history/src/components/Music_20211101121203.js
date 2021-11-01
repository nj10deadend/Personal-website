import { Typography } from "@material-ui/core";
import styled from '@emotion/styled'
import ArtistLogo1 from "../Pics/ArtistLogo1.png"
import ArtistLogo2 from "../Pics/ArtistLogo2.png"
import MovieScreenshot1 from "../Pics/MovieScreenshot1.png"
import MovieScreenshot2 from "../Pics/MovieScreenshot2.png"
import Thunderstorm from "../Music/Thunderstorm loop 3_1.mp4"
import Ethereal from "../Music/ethereal recording 1-28.mp4"

const Video = styled('video')`
    max-width: 40vw;

`


function Music () {
    return (
        <div >
                <Typography variant="h4" component="div" gutterBottom>
                    I also make music!
                </Typography>
                <Typography variant="small" component="div" gutterBottom>
                    I go by Deadend on streaming services (Spotify, Apple Music, Soundcloud, etc). 
                </Typography>
            <div className="music-container">
                <div className="artist-icon-container">
                    <img className="artist-icon" src={ArtistLogo1} alt="Spotify Profile" />

                    <img className="artist-icon" src={ArtistLogo2} alt="Spotify Profile alt" />

                    <img className="artist-icon" src={MovieScreenshot1} alt="Film Screenshot 1" />

                    {/* <img className="artist-icon" src={MovieScreenshot2} alt="Film Screenshot 2" /> */}

                </div>
                <div className="music-snippets">
                    <div className="Ethereal">
                        <Video loop controls>
                            <source src={Ethereal} type="video/mp4" />
                        </Video>
                        <Typography variant="p" component="div" gutterBottom>
                            I use FL Studio 20 to make music but I'm also familiar with Abeleton. 
                            There I can chop samples or make instrumentals from sratch using a wide variety of VSTs (Virtual Studio Technology) 
                            and add any drums that I may want. The music I make primarily falls within the hip-hop/rap genre but I'm also well versed in 
                            ambient and electronic music. Currently I'm learning DnB and Jungle music. 
                        </Typography>
                    </div>

                    <div className="Thunderstorm">

                        <Video autoPlay loop controls>
                            <source src={Thunderstorm} type="video/mp4" />
                        </Video>
                        <Typography variant="p" component="div" gutterBottom>
                            Edited using Adobe Premiere Pro CC.
                        </Typography>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Music;