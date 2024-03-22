import React from "react";
import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Sections = ({ information, handleInputForm, form }) => {
  const numberOfSections = information?.sections?.length;
  let unitPercentage = 100 / numberOfSections;

  const [progress, setProgress] = useState(
    form?.section
      ? (form.section - 1) * unitPercentage + unitPercentage
      : unitPercentage
  );

  const handleButtonClick = (section) => {
    const targetProgress = (section - 1) * unitPercentage + unitPercentage;
    setProgress(targetProgress);
    handleInputForm({ section });
  };

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
                  handleButtonClick(sec.position);
                }}
              >
                {sec.key}
              </button>
            </div>
          );
        })}
      </div>
      <ProgressBar now={progress} />
    </div>
  );
};
