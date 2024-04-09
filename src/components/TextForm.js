import React, {useState}from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [originalText, setOriginalText] = useState('');
    const[text, setText] = useState("")

    const handleOrgClick=()=>{
        setText(originalText);
        props.showAlert("Converted to Original Text!", "success")
    }

    const handleUpClick=()=>{
        // console.log("click")
        // setText("heelllooooo")
        setOriginalText(text);
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success")
    }

    const handleLoClick=()=>{
        // console.log("click")
        // setText("heelllooooo")
        setOriginalText(text);
        const newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success")
    }

    const handleOnChange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }

    const handleCapitalClick=()=>{
        // const words = text.split(" ")
        setOriginalText(text);
        const newText = text.split(' ').map(wordss=> wordss[0].toUpperCase()+ wordss.slice(1)).join(' ');//charAt(0).toUpperCase()+words.slice(1)
        setText(newText)
        props.showAlert("Converted to Capital Text!", "success")
    }

    const handleInverseClick=()=>{
        setOriginalText(text);
        let newstr = "";
        console.log(text)
        for(let char of text)
        {
            let upper = char.toUpperCase()
            console.log(upper)
            console.log("frdfr")
            console.log(char)
            if(char===upper)
            {
                newstr+=char.toLowerCase()
            }
            else
            {
                newstr+=upper
            }
        }
        console.log(newstr)
        setText(newstr)
        props.showAlert("Converted to Inverse Text!", "success")
    }

    const handleCopy=()=>{
       let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied text to clipboard!!", "success")
    }

    const handleClrClick=()=>{
        const newText = " "
        setText(newText)
        props.showAlert("Text Clear", "success")
    }
    
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className='form-control' id='myBox' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#2a2929':'white' , color: props.mode === 'dark' ? 'white':'black'}} rows='10'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOrgClick}>Original Text</button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Capital Case</button>
        <button className="btn btn-primary mx-2" onClick={handleInverseClick}>InVErSE Case</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear</button>

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} <b>Words</b> And {text.length} <b>Character</b ></p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox"}</p>
    </div>
    </>
  )
}
