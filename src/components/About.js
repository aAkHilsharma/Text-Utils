import React, { useState } from "react"

export default function About(){
    
    const [myStyle, setMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    });
    const [btnText, setBtnText] = useState("Enable Dark Mode");
    const changeStyle = ()=>{
        if(myStyle.color === 'white'){
             setMyStyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setBtnText("Enable Dark Mode");
        } else{
            setMyStyle({
                color : 'white',
                backgroundColor : 'black',
                border : '1px solid white' 
            })
            setBtnText("Enable Light Mode");
        }
    }
    return(
        <div className="container">
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button style={myStyle} className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About Text Utils
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>Apart from counting words and characters,</strong>  our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        About features available
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>Uppercase and Lower Case : </strong> Free software utility which allows you to find frequencies of words. Non-English language texts are supported. It also counts number of words, characters. Also can convert to uppercase and lowercase.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        About Me
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>Akhil Sharma, 20</strong> I am a tech enthusiast and love to learn new technologies, currently learning react from youtube.
                    </div>
                    </div>
                </div>
            </div>
            <div className="contanier my-3">
                <button type="button" onClick={changeStyle} className="btn btn-primary">{btnText}</button>
            </div>
        </div>
    )
}