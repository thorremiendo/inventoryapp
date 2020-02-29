import React, { useState } from 'react'
import Button from './Button'

const HelloWorld = () => {
    const [visible, setVisible] = useState(true)
    //useState [NAME OF STATE, NAME OF FUNCTION TO CHANGE VALUE OF STATE] = useState(DEFAULT VALUE)
    // <> </> to wrap all elements
    // {} wrap javascript to use javascript expresseions inside HTML elements
    const [text, setText] = useState("Hello World")
    return(
        <>
        <Button color="danger" onClick={() => setVisible(!visible)}>
        Toggle Greeting
        </Button>
        {visible && <h1>{text}</h1> }
        <input type="text" onChange={ e => setText(e.target.value)} value={text} />
        </>
    )
}

export default HelloWorld