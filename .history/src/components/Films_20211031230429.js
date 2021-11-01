import { Typography } from "@material-ui/core";
// import Proj1 from "src/Films/CINE353Proj.mp4";
import Proj1 from "../Films/CINE353Proj.mp4";
import Longing from "../Films/Longing.mp4";
import styled from '@emotion/styled'

const Video = styled('video')`
    max-width: 80vw;

`


function Films () {
    return (
        <div className="film-container">
            <Typography variant="h2" component="div" gutterBottom>
                Outside of being a Software Engineer I'm also a Filmmaker.

            </Typography>

            <Typography variant="h4" component="div" gutterBottom>
                Here's some of my work:

            </Typography>
            <div className="film-1">
                <Video  muted autoPlay loop controls>
                    <source src={Proj1} type="video/mp4" />

                </Video>
            </div>
            <div className="film-2">
                <Video muted autoPlay loop controls>
                    <source src={Longing} type="video/mp4" />

                </Video>

            </div>

            <Typography variant="h6" component="div" gutterBottom>
                You can watch these on <span><img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="Youtube"></img></span> as well <a href="https://www.youtube.com/channel/UCaFY6ykeMFdS4M5_bHiWe0w" target="_blank">here.</a>
            </Typography>


            {/* <iframe id="player" style={{position: 'absolute', inset: '0px 0px 0px -570.111px', width: '1262.22px', height: '710px'}} frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" 
                src="https://www.youtube.com/embed/HBXch3XM9Bw?autohide=1&amp;autoplay=0&amp;controls=0&amp;enablejsapi=1&amp;iv_load_policy=3&amp;loop=0&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;wmode=opaque&amp;origin=https%3A%2F%2Fwww.deadendwavmp4.com&amp;widgetid=1" 
                class="background-video ready">
            </iframe> */}

 
            
            
            

        </div>
    )
}

export default Films;