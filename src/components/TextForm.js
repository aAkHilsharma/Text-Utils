import React from "react"

export default function TextForm(props) {
    return(
        <div>
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Conver to uppercase</button>
        </div>
    )
}