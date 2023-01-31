import React ,{useState}from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  
    const handelUpClick = ()=>{
      console.log("uppercae was click"+text);
      let newText = text.toUpperCase();
      setText(newText)
    }
    const handelLoClick = ()=>{
      console.log("Lowercase was click"+text);
      let newText2 = text.toLowerCase();
      setText(newText2)
                      }

    const handelCpClick= ()=>
    {
      let newText3 = text.slice(5,20);
      setText(newText3)
    }
  const handleOnChange = (event)=>
  {
    console.log("on change");
    setText(event.target.value)
  }
    const handleExtraSpaces=()=>
    {
      let newText4 = text.split(/[  ]+/);
      setText(newText4.join(" "))
    }
 
  return (
    <>
          <div>
            <h1>{props.heading}</h1>
          <div className="mb-3">

            <textarea value={text} onChange={handleOnChange}className="form-control" id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handelLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handelCpClick}>Slicing
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces
          </button>
          </div>
     
        <div className="container mb-5">
          <h1>your  text Summary</h1>
          <p>{text.split(" ").length} words {text.length} charactors</p>
          <p>{0.008 * text.split(" ").length}Minutes are taken</p>
            
            <h2>Preview</h2>
            <p>{text}</p>
           
          </div>     
     </>
  )
}
