import React from "react";

export const Questions = ({
  information,
  handleInputForm,
  form,
  AddContract,
}) => {
  const renderQuestion = (question) => {
    const getDefaultValue = () =>
      form?.value?.find((field) => field.key === question.key)?.value;

    const handleInputChange = (event) => {
      const inputValue =
        question.checkbox && event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value;

      handleInputForm({
        inputValue: inputValue,
        attribute: question.key,
      });
    };
    const inputType = question.checkbox
      ? "checkbox"
      : question.date
      ? "date"
      : question.number
      ? "number"
      : "text";

    return (
      <div style={{ width: "440px" }} key={question.key}>
        {question.checkbox ? (
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
      <div style={{ textAlign: "center" }}>
        {form.section > 1 && (
          <button
            style={{
              margin: "10px",
              padding: "5px 10px",
              borderRadius: "5px",
              border: "none",
            }}
            onClick={() => handleInputForm({ section: form.section - 1 })}
          >
            Preview
          </button>
        )}
        <button
          style={{
            margin: "10px",
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
          }}
          onClick={() => handleInputForm({ section: form.section + 1 })}
        >
          Next
        </button>
        <button
          style={{
            margin: "10px",
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
          }}
          onClick={() => AddContract({ isDraft: true })}
        >
          Save Draft
        </button>
      </div>
    </div>
  );
};
