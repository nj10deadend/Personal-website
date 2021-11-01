import styled from '@emotion/styled';

const Something = styled('a')`
    height: 200px;
    width: 200px;
    background-color: gray;
`
function SocialLinks () {


    function linkToSoundcloud () {
        return (

            <form action="http://soundcloud.com/de4dend" target="_blank">
                <input type="submit"/>
        
            </form>
        )

    }
    return (
        <div>
            {/* <button onClick="location.href='http://soundcloud.com/de4dend'" type="button" >
                <i class="fab fa-soundcloud"></i>
            </button> */}
            {/* <form action="http://soundcloud.com/de4dend" target="_blank">
                <i class="fab fa-soundcloud"></i>
                <input type="submit" value="Go to Soundcloud" />
                
            </form> */}
            {/* <button onclick="window.open('http://soundcloud.com/de4dend','_blank')"> 
                <i class="fab fa-soundcloud"></i>

            </button> */}

            
{/* 
                <button onClick={linkToSoundcloud}>
                    <i class="fab fa-soundcloud">Word</i>
                    <a href="http://soundcloud.com/de4dend" target="_blank"></a>
                </button> */}

                <Something href="http://soundcloud.com/de4dend" target="_blank">
                    Soundcloud
                    <img src="https://m.sndcdn.com/_next/static/images/apple-touch-icon-180-893d0d532e8fbba714cceb8d9eae9567.png" alt="Soundcloud"></img>
                    
                </Something>
            

        </div>
    )
}

export default SocialLinks;