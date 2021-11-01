import { Typography } from "@material-ui/core";
import styled from '@emotion/styled'

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


        </div>
    )
}

export default Music;