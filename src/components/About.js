import React from "react"
    export default function About(props){

        // const[myStyle, setMyStyle]=useState({
        //     color: 'black',
        //     backgroundColor: 'white'
        // })
        // const [btnText, setBtnText]=useState("Enable Dark Mode")
      
        // const enableMode=()=>{
        //     if(myStyle.color === 'black')
        //     {
        //         setMyStyle({
        //                 color: 'white',
        //                 backgroundColor: 'black'
                    
        //         })
        //         setBtnText("Enable Light Mode")
        //     }
        //    else
        //    {
        //         setMyStyle({
        //             color: 'black',
        //             backgroundColor: 'white'
                    
        //     })
        //     setBtnText("Enable Dark Mode")
                
        //    }
        // }

        let myStyle={
          color:props.mode ==='dark'?'white':'#2a2929',
          backgroundColor: props.mode ==='dark'?'rgb(61 61 61)':'white'
        }
        return(
            <div className="container" style={{color:props.mode ==='dark'?'white':'#2a2929'}}>
                <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Analyze Your Text</strong>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <strong>TextUtils Gives you a way to anlyze your text quickly and efficiently. Be it in your word count and Character Count</strong> 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong>Free To Use</strong>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  TextUtils is free Character counter tool that provised instant character count and statistic for the Text textutils report the number of words and characters, Thus is suitable for the text write.
                  Be it in your word count and Character Count
                </div>
              </div>
            </div>
            <div className="accordion-item" >
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong> Browser Compatible</strong>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  TextUtils is free Character counter tool that provised instant character count and statistic for the Text textutils report the number of words and characters, Thus is suitable for the text write.
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
