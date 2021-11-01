import {useState} from 'react';

function Bio () {


    const [clicked, setClicked] = useState()


    function revealBio () {
        return (
            <p>I </p>
        )
    }
    return (
        <div className="bio-container">
            <h1>Welcome! My name is Naseer and I'm a fullstack developer</h1>

            <div>
                <small>Click below to reveal more info</small>
                <button>Background</button>
            </div>

        </div>
    )
}

export default Bio;