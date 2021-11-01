import { Typography } from "@material-ui/core";
// import Proj1 from "src/Films/CINE353Proj.mp4";


function Films () {
    return (
        <div className="film-container">
            <Typography variant="h2" component="div" gutterBottom>
                Outside of being a Software Engineer I'm also a Filmmaker. Here's some of the work I've made

            </Typography>

          
            <video  muted loop autoPlay>
                <source src="/home/nj10deadend/personal-projects/portfolio-website/portfolio-website/src/Films/CINE353Proj.mp4" type="video/mp4"/>
            </video>

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

                {/* <iframe 
                width="560" height="315" src="" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>

                </iframe> */}

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