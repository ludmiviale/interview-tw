import React from "react";
import BtnStandart from "../../components/BtnStandart";

export const Questions = ({
  information,
  handleInputForm,
  form,
  AddContract,
  progress,
  handleProgress,
}) => {
  const renderQuestion = (question) => {
    const getDefaultValue = () =>
      form?.value?.find((field) => field.key === question.key)?.value;

    const handleInputChange = (event) => {
      const inputValue =
        question.radio && event.target.type === "radio"
          ? event.target.checked
          : event.target.value;

      handleInputForm({
        inputValue: inputValue,
        attribute: question.key,
      });
    };
    const inputType = question.radio
      ? "radio"
      : question.date
      ? "date"
      : question.number
      ? "number"
      : "text";

    return (
      <div style={{ width: "440px" }} key={question.key}>
        {question.radio ? (
          <div style={{ paddingLeft: "10px" }}>
            <p>
              {" "}
              <input
                style={{ marginRight: "10px" }}
                type={inputType}
                defaultValue={getDefaultValue}
                onChange={handleInputChange}
              />
              {question.question}
            </p>
          </div>
        ) : (
          <div>
            {question.phrase ? (
              <div style={{ paddingLeft: "10px", marginTop: "10px" }}>
                <p>{question.question}</p>
              </div>
            ) : (
              <div style={{ padding: "10px" }}>
                <p>{question.question}</p>
                <input
                  style={{ width: "420px" }}
                  type={inputType}
                  defaultValue={getDefaultValue}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {information.sections.map((sec) => {
        if (sec.position === form.section)
          return (
            <div
              style={{
                marginBottom: "20px",
                marginTop: "15px",
                color: "white",
              }}
              key={`${sec.key}questions`}
            >
              {information.questions
                ?.filter((question) => question.section === sec.key)
                .map((q) => renderQuestion(q))}
            </div>
          );
      })}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "5%",
        }}
      >
        {form.section > 1 && (
          <BtnStandart
            type="primary"
            action={() => {
              handleInputForm({ section: form.section - 1 });
              handleProgress(form.section - 1);
            }}
            children={<i className="bi bi-arrow-left-circle-fill"></i>}
            marginRight="10px"
          />
        )}
        <BtnStandart
          type="primary"
          action={() => AddContract({ isDraft: true })}
          children={<i className="bi bi-check2-circle"></i>}
          marginRight="10px"
        />
        <BtnStandart
          type="primary"
          action={() => {
            handleInputForm({ section: form.section + 1 });
            handleProgress(form.section + 1);
          }}
          children={<i className="bi bi-arrow-right-circle-fill"></i>}
          marginRight="10px"
        />
      </div>
    </div>
  );
};
