// import styled from '@emotion/styled';


function SocialLinks () {


    function linkToSoundcloud () {
        return (

            <form action="http://soundcloud.com/de4dend" target="_blank">
                <input type="submit"/>
        
            </form>
        )

    }
    return (
        <div className="socials-bar">

                <a href="http://soundcloud.com/de4dend" target="_blank" rel="noreferrer">
                    <img className="socials-icons" width={35} height={35} src="https://m.sndcdn.com/_next/static/images/apple-touch-icon-180-893d0d532e8fbba714cceb8d9eae9567.png" alt="Soundcloud" />
                </a>

                <a href="https://open.spotify.com/artist/0PRmnSe4MfH8o902sR3sSl?si=l9_dS8gERamhM7V5mOm26w&nd=1" target="_blank" rel="noreferrer">
                    <img className="socials-icons" width={35} height={35} src="https://images-na.ssl-images-amazon.com/images/I/41xu2Bdb4oL.jpg" alt="Spotify" />
                </a>

                <a href="https://www.youtube.com/channel/UCaFY6ykeMFdS4M5_bHiWe0w" target="_blank" rel="noreferrer">
                    <img className="socials-icons" width={35} height={35} src="https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj" alt="Youtube" />
                </a>

                <a href="https://www.twitch.tv/deadend_digital" target="_blank" rel="noreferrer">
                    <img className="socials-icons" width={35} height={35} src="https://blog.twitch.tv/assets/uploads/03-glitch.jpg" alt="Twitch" />
                </a>

                <a href="https://www.instagram.com/nj10_deadend/" target="_blank" rel="noreferrer">
                    <img className="socials-icons" width={35} height={35} src="https://www.howtogeek.com/wp-content/uploads/2021/08/instagram_hero_1200_675.png?width=1198&trim=1,1&bg-color=000&pad=1,1" alt="Instagram" />
                </a>
            

        </div>
    )
}

export default SocialLinks;