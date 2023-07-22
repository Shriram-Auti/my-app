import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // function to convert text into uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppear Case","success");
  };
  // function to convert text into lowercase
  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower Case","success");

  };

  // function to clear text
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","danger");

  };

  // function to copy text
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard","success");

  };

  const handleOnChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Write text here
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLwClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          // color: props.mode === "dark" ? "white" : "black",
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your summary here...</h2>
        <p>
          {" "}
          {text.split(" ").length} Words and {text.length} Characters{" "}
        </p>
        <p>
          You will take {0.008 * text.split(" ").length} Minutes to read this.
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to above textbox to preview it here......."}</p>
      </div>
    </>
  );
}
