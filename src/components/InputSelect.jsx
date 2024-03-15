import React from "react";
import Select from "react-select";
const InputSelect = ({ action, title, placeHold, defaultVal, opt, value }) => {
  return (
    <div
      className="inputDiv"
      style={{
        marginRight: "0px",
        minHeight: "0px",
        marginTop: "3px",
      }}
    >
      {title && (
        <div style={{ display: "flex" }}>
          <p className="inputText">{title}</p>
        </div>
      )}

      <Select
        value={value}
        options={opt}
        onChange={action}
        className={"commonSelect"}
        defaultValue={defaultVal}
        placeholder={placeHold}
      />
    </div>
  );
};

export default InputSelect;
