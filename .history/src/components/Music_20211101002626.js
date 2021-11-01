import { Typography } from "@material-ui/core";
import styled from '@emotion/styled'
import ArtistLogo1 from "../Pics/ArtistLogo1.png"

const Video = styled('video')`
    max-width: 65vw;

`


function Music () {
    return (
        <div className="music-container">
            <Typography variant="h4" component="div" gutterBottom>
                I also make music!
            </Typography>
            <Typography variant="small" component="div" gutterBottom>
                I go by Deadend on streaming services (Spotify, Apple Music, Soundcloud, etc). 
            </Typography>
            <img src={ArtistLogo1} alt="Spotify Profile" />


        </div>
    )
}

export default Music;