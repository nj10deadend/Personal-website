function SocialLinks () {


    // function linkToSoundcloud () {
    //     <form action="http://soundcloud.com/de4dend" target="_blank">
    //         <input type="submit" value="Go to Soundcloud" />
    
    //     </form>

    // }
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

            <button to="http://soundcloud.com/de4dend" target="_blank">
                <i class="fab fa-soundcloud"></i>
            </button>

        </div>
    )
}

export default SocialLinks;