import React, { useState } from 'react';

export default function TextFoam(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Convert to upperCase" , "success")
  };

  const handleloClick = () => {
    setText(text.toLowerCase());
        props.showAlert("Convert to LowerCase" , "success")

  };

  const handleclearClick = () => {
    setText("");
            props.showAlert("Text cleared" , "success")

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

const handleExtraSpaces = () => {
  let newText = text.split(/\s+/); // split by 1 or more whitespace
  setText(newText.join(" "));      // join back with single space
  props.showAlert("Removed extra spaces", "success");
};



  const wordCount = text.split(/\s+/).filter(word => word.length !== 0).length;

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black'
        }}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#316dddff' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleloClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleclearClick}>
          Clear
        </button>

         <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>

      <div className="container" style={{
          color: props.mode === 'dark' ? 'white' : 'black'
        }} >
        <h2>Your Text Summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>    
    </>
  );
}
