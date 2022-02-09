import React from 'react'


const GifList = (props) => {
    return (
        <div>
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt='gif'/>)}
        </div>
    )
    // this returns our gifs to the container after search is inputted
    

}

export default GifList