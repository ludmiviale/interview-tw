import React from "react";
import { AddendumToContract } from "./contractsType/AddendumToContract/AddendumToContract";

export const BlankForm = ({ form, setForm, flyerRef, AddContract }) => {
  const handleInputForm = ({ inputValue, attribute, section, completed }) => {
    if (section) {
      setForm({ ...form, section });
      return;
    }

    if (completed) {
      setForm({ ...form, completed });
      return;
    }

    let form2 = { ...form };

    if (form2?.value?.find((e) => e.key === attribute)) {
      form2.value.filter((e) => e.key === attribute)[0].value = inputValue;
    } else {
      form2.value.push({ key: attribute, value: inputValue });
    }
    setForm(form2);
  };

  return (
    <>
      {form.key === "Addendum To Contract" && (
        <AddendumToContract
          handleInputForm={handleInputForm}
          form={form}
          flyerRef={flyerRef}
          AddContract={AddContract}
        />
      )}
    </>
  );
};
