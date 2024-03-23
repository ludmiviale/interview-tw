import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Sections = ({ information, form, progress, handleProgress }) => {
  return (
    <div>
      <div style={{ display: "flex", marginBottom: "5px" }}>
        {information?.sections?.map((sec) => {
          return (
            <div key={`${sec.key}header`}>
              <button
                style={{
                  margin: "10px",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor:
                    form?.section === sec?.position && "lightblue",
                  pointerEvents: form?.section === sec?.position && "none",
                }}
                onClick={() => {
                  handleProgress(sec.position);
                }}
              >
                {sec.key}
              </button>
            </div>
          );
        })}
      </div>
      <ProgressBar now={progress} style={{ margin: "10px" }} />
    </div>
  );
};
