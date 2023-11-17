import React, {useState} from 'react'

export default function TextForm(props){

  const handleUpClick = () =>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleloClick = () =>{
    //console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase", "success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces are removed!", "success");
  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const handleCopy = () =>{
    //console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleClearClick = () =>{
    let newText = '';
    setText(newText)
    props.showAlert("Text box is clear!", "success");
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container ' style={{color: props.mode === 'dark'?'white': '#474b4e'}}>
      <h1>
        {props.heading} 
      </h1>
    <div className="mb-3" >
    <textarea className="form-control" value = 
    {text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'darkgrey':'white'}} id='myBox' rows="8" ></textarea>
    </div>
        <button className="btn btn-primary my-2 mx-2 " onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleloClick}>Convert to lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
       <div className='container my-2' style={{color: props.mode === 'dark'?'white': '#474b4e'}}>
        <h2>Your text summary:-</h2>
        <p>There are {text.split(" ").filter((element)=>{return element.length}).length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>
        <h2>preview:</h2>
        <p>{text.length>0?text:"Enter something in thr textbox above to preview it here"}</p>
    </div>
    </>
  )
}