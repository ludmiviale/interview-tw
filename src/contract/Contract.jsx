import React, { useRef, useState } from "react";
import { BlankForm } from "./BlankForm";
import InputSelect from "../components/InputSelect";

const optContracts = [
  { value: "Addendum To Contract", label: "Addendum To Contract" },
];
export const Contract = () => {
  const [form, setForm] = useState({});
  const flyerRef = useRef();
  const AddContract = () => {
    console.log("Esta es la funcion para agregar contratos");
  };
  return (
    <>
      <div className="MainDiv">
        <div className="subContainerFixedBig">
          <div style={{ display: "flex" }}>
            <div style={{ minWidth: "20%" }}>
              <p>Select your contract</p>
              <InputSelect
                opt={optContracts}
                action={(e) => {
                  setForm({
                    ...form,
                    key: e.value,
                    section: 1,
                    value: [],
                  });
                }}
              />
            </div>
            <BlankForm
              flyerRef={flyerRef}
              form={form}
              setForm={setForm}
              AddContract={AddContract}
            />
          </div>
        </div>
      </div>
    </>
  );
};
