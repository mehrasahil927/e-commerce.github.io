import React, {useState} from 'react'
export default function TextForm(props) {
    const [text ,setText] =useState("Enter your text here")
    const handleUpClick=() => {
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event) =>{
        console.log("onChange");
        setText(event.target.value);
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}