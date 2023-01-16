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
    const clearText = ()=>{
        setText('');
    }
    const copyText = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    return(
        <div className="conatainer" style={{color: props.mode === 'dark'? 'white': 'black'}}>
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? 'grey': 'white', color: props.mode === 'dark'? 'white': 'black'}} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={copyText}>Copy To Clipboard</button>
            <div className="container my-2">
                <h2>Text Summary</h2>
                <p className="my-0">{text.split(" ").length} Words and {text.length} characters</p>
                <p className="my-0">{(0.008 * text.split(" ").length).toFixed(2)+" "}Minutes to read</p>
                <h2 className="my-2">Preview</h2>
                <p>{text.length>0? text:"Enter text above for preview"}</p>
            </div>

        </div>
    )
}