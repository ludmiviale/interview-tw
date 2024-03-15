import React from "react";

export const Questions = ({
  information,
  handleInputForm,
  form,
  AddContract,
}) => {
  return (
    <div>
      {information.sections.map((sec) => {
        if (sec.position === form.section)
          return (
            <div style={{ marginBottom: "20px" }} key={`${sec.key}questions`}>
              {information.questions
                ?.filter((question) => question.section === sec.key)
                .map((q) => (
                  <div key={q.key}>
                    <p>{q.question}</p>
                    <input
                      defaultValue={
                        form?.value?.find((field) => field.key === q.key)?.value
                      }
                      onChange={(event) =>
                        handleInputForm({
                          inputValue: event.target.value,
                          attribute: q.key,
                        })
                      }
                    />
                  </div>
                ))}
            </div>
          );
      })}
      {form.section > 1 && (
        <button
          style={{ marginRight: "10px" }}
          onClick={() => handleInputForm({ section: form.section - 1 })}
        >
          Preview
        </button>
      )}
      <button
        style={{ marginRight: "10px" }}
        onClick={() => handleInputForm({ section: form.section + 1 })}
      >
        Next
      </button>
      <button onClick={() => AddContract({ isDraft: true })}>Save Draft</button>
    </div>
  );
};
