import React, {useState} from "react"

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return(
        <div>
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowercase}>Convert to Lowercase</button>
            <div className="container my-2">
                <h2>Text Summary</h2>
                <p className="my-0">{text.split(" ").length} Words and {text.length} characters</p>
                <p className="my-0">{(0.008 * text.split(" ").length).toFixed(2)+" "}Minutes to read</p>
                <h2 className="my-2">Preview</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}