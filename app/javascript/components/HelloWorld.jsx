import React, { useState } from 'react'

const HelloWorld = () => {
    const [visible, setVisible] = useState(true)
    //useState [NAME OF STATE, NAME OF FUNCTION TO CHANGE VALUE OF STATE] = useState(DEFAULT VALUE)
    // <> </> to wrap all elements
    // {} wrap javascript to use javascript expresseions inside HTML elements
    const [text, setText] = useState("Hello World")
    return(
        <>
        <button className = "btn btn-primary" onClick = {() => setVisible(!visible)}>
        Toggle greeting!
        </button>
        {visible && <h1>{text}</h1> }
        <input type="text" onChange={ e => setText(e.target.value)} value={text} />
        </>
    )
}

export default HelloWorld