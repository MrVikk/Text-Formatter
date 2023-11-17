import React from "react"

function Contact(props) {


    return (
        <div className="container" style={{color: props.mode === 'dark'?'white': '#474b4e'}}>
            <span>
                <h1> This is the contact page </h1>
                <h3> You can contact me :- vivekbhadouria28@gmail.com</h3>
            </span>
            
        </div>
    )
}
export default Contact