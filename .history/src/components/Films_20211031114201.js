import { Typography } from "@material-ui/core";


function Films () {
    return (
        <div className="film-container">
            <Typography variant="h2" component="div" gutterBottom>
                Outside of being a Software Engineer I'm also a Filmmaker. Here's some of the work I've made

            </Typography>

          
            <video  muted loop autoPlay>
                <source src="/home/nj10deadend/personal-projects/portfolio-website/portfolio-website/src/Films/CINE353Proj.mp4" type="video/mp4"/>

            </video>
            
            
            

        </div>
    )
}

export default Films;