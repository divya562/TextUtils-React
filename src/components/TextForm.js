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
        for(let char of text)
        {
            let upper = char.toUpperCase()
            if(char===upper)
            {
                newstr+=char.toLowerCase()
            }
            else
            {
                newstr+=upper
            }
        }
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
    const handleOnClickSpeech=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1 className="my-4">{props.heading}</h1>
        <div className="mb-3">
            <textarea className='form-control' id='myBox' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'rgb(61 61 61)':'white' , color: props.mode === 'dark' ? 'white':'black'}} rows='10'></textarea>
        </div>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleOrgClick}>Original Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalClick}>Capital Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleInverseClick}>InVErSE Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClrClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClickSpeech}>Text Speech</button>

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b>Words</b> And {text.length} <b>Character</b ></p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
