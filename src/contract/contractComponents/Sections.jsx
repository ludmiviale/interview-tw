import React from "react";

export const Sections = ({ information, handleInputForm, form }) => {
  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      {information?.sections?.map((sec) => {
        return (
          <div key={`${sec.key}header`}>
            <button
              style={{
                margin: "10px",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
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
