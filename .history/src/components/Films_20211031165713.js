import { Typography } from "@material-ui/core";
// import Proj1 from "src/Films/CINE353Proj.mp4";


function Films () {
    return (
        <div className="film-container">
            <Typography variant="h2" component="div" gutterBottom>
                Outside of being a Software Engineer I'm also a Filmmaker.

            </Typography>

            <Typography variant="h4" component="div" gutterBottom>
                Here's some of my work:

            </Typography>
            {/* <video muted autoPlay loop>
                <source src="src/Films/CINE353Proj.mp4" type="video/mp4" />

            </video> */}

            <iframe id="player" style={{position: 'absolute', inset: '0px 0px 0px -570.111px', width: '1262.22px', height: '710px'}} frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" 
                src="https://www.youtube.com/embed/HBXch3XM9Bw?autohide=1&amp;autoplay=0&amp;controls=0&amp;enablejsapi=1&amp;iv_load_policy=3&amp;loop=0&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;wmode=opaque&amp;origin=https%3A%2F%2Fwww.deadendwavmp4.com&amp;widgetid=1" 
                class="background-video ready">
            </iframe>

            <div className="films">
                <iframe
                    width={320*2.75}
                    // width={1000}
                    title="YouTube video player" frameborder="0" 

                    
                    height={(320*2.75)*.5625}
                    src={`https://www.youtube.com/embed/HBXch3XM9Bw`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>

                </iframe>

                <iframe
                    width={320*2.75}
                    height={(320*2.75)*.5625}
                    src={"https://www.youtube.com/embed/1OB1pVKDomU"}
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>


                </iframe>

               
            </div>
            
            
            

        </div>
    )
}

export default Films;