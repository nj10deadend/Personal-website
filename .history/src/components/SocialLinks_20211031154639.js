function SocialLinks () {


    // function linkToSoundcloud () {

    // }
    return (
        <div>
            <button onClick="location.href='http://soundcloud.com/de4dend'" type="button" >
                <i class="fab fa-soundcloud"></i>
            </button>
            <form action="http://soundcloud.com/de4dend" target="_blank">
                <input type="submit" value="Go to Soundcloud" />
            </form>

        </div>
    )
}

export default SocialLinks;