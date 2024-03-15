import React from "react";

export const Sections = ({ information, handleInputForm, form }) => {
  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      {information?.sections?.map((sec) => {
        return (
          <div key={`${sec.key}header`}>
            <button
              style={{
                marginRight: "5px",
                padding: "0px 5px",
                backgroundColor: form?.section === sec?.position && "lightblue",
                pointerEvents: form?.section === sec?.position && "none",
              }}
              onClick={() => handleInputForm({ section: sec?.position })}
            >
              {sec.key}
            </button>
          </div>
        );
      })}
    </div>
  );
};
