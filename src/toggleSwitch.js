/* import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch() {
  const [checked, setChecked] = useState(true);
  document.querySelector("body").style.background="white";

  const handleChange = val => {
    setChecked(val)

  document.querySelector("body").style.background="red";
  }

  return (
    <div className="app" style={{textAlign: "center"}}>
      <h4>Toggle switch in React</h4>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default ToggleSwitch; */