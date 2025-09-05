import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared!", "success")
    };
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    };
    const handleSpeak = () => {
        let speech = new SpeechSynthesisUtterance();
        speech.text = text;
        window.speechSynthesis.speak(speech);
        props.showAlert("Listen Up!", "success");
    };
    const handleRemoveSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Spaces Removed!", "success");
    };
    const handleReverseClick = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Reversed!", "success");
    };
    const handleCapitalizeWords = () => {
        let newText = text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        setText(newText);
        props.showAlert("Words Capitalize!", "success");
    };

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{
                color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36, 74, 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'rgb(36, 74, 104)' }}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleReverseClick}>Reverse Text</button>
                <button disabled={text.length === 0} className="btn btn-info mx-2" onClick={handleCapitalizeWords}>Capitalize Words</button>
                <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleSpeak}>Speak Text</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>


            </div>


            <div className='container my-3' style={{
                color: props.mode === 'dark' ? 'white' : '#042743'
            }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
