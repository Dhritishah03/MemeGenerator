import React from "react"
import "./meme.css"
import memedata from "./memedata.js"
export default function Meme() {
    const [memeImage, setMemeImage]= React.useState("")
    

    function getMemeImg(){
        const memesArray =  memedata.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImg}
                >
                    Get a new meme image 
                </button>
            </div>
            <img src={memeImage} className="meme--img"/>
        </main>
    )
}