import { Typography } from "@material-ui/core";


function Films () {
    return (
        <div className="film-container">
            <Typography variant="h2" component="div" gutterBottom>
                Outside of being a Software Engineer I'm also a Filmmaker. Here's some of the work I've made

            </Typography>

            <div>
                <video src="/Films/CINE353Proj.mp4" muted loop autoPlay></video>
            </div>
            

        </div>
    )
}

export default Films;