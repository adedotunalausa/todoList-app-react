import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.inputChange} type="text" value={props.inputValue} placeholder="Enter Item" />
      <div className="add-btn" onClick={props.btnClick}>
        <i class="fas fa-plus-circle"></i>
      </div>
    </div>
  );
}

export default InputArea;
