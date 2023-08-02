import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppear Case", "success");
  };
  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower Case", "success");
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "danger");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "success");
  };

  const handleOnChange = (event) => {
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
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleLwClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-2"
          onClick={handleClClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your summary here...</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters{" "}
        </p>
        <p>
          You will take{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read this.
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview here......."}</p>
      </div>
    </>
  );
}
