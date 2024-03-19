import React from "react";
import { ContractsInfo } from "../ContractsInfo";
import { Questions } from "../../contractComponents/Questions";
import jsPDF from "jspdf";
import { Sections } from "../../contractComponents/Sections";
import BtnStandart from "../../../components/BtnStandart";
import { PdfAsIs } from "./Pdf";

export const AsIs = ({ handleInputForm, form, flyerRef, AddContract }) => {
  const information = ContractsInfo.find((e) => e.key === form.key);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    doc.setFont("Inter-Regular", "normal");

    doc.html(flyerRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  const handlePrintPdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    doc.setFont("Inter-Regular", "normal");

    doc.html(flyerRef.current, {
      async callback(doc) {
        const pdfBlob = doc.output("blob");

        const pdfUrl = URL.createObjectURL(pdfBlob);

        window.open(pdfUrl, "_blank");

        URL.revokeObjectURL(pdfUrl);
      },
    });
  };

  return (
    <div
      className="d-flex"
      style={{
        minWidth: "80%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {form.completed === true ? (
        <>
          {/* // OPTIONAL Esta seccion se podria componetizar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "5%",
            }}
          >
            {form.completed === true ? (
              // OPTIONAL Este boton no funciona correctamente, fixear
              <BtnStandart
                type="primary"
                action={() => setForm({ ...form, completed: false })}
                children={<>Edit</>}
                marginRight="10px"
              />
            ) : (
              <BtnStandart
                type="primary"
                action={() => setForm({ ...form, completed: true })}
                children={<>Back</>}
                marginRight="10px"
              />
            )}
            <BtnStandart
              type="primary"
              action={handleGeneratePdf}
              marginRight="10px"
              children={<>Descargar</>}
            />
            <BtnStandart
              type="primary"
              action={handlePrintPdf}
              children={<>Imprimir</>}
            />
          </div>
          <PdfAddendumToContract
            handleInputForm={handleInputForm}
            form={form}
            flyerRef={flyerRef}
          />
        </>
      ) : (
        <>
          <Sections
            information={information}
            handleInputForm={handleInputForm}
            form={form}
          />
          {form.section < information?.sections?.length ? (
            <Questions
              information={information}
              handleInputForm={handleInputForm}
              form={form}
              AddContract={AddContract}
            />
          ) : (
            <>
              <button
                onClick={() => {
                  handleInputForm({ completed: true });
                  AddContract();
                }}
              >
                Save Contract
              </button>
              <PdfAsIs handleInputForm={handleInputForm} form={form} />
            </>
          )}
        </>
      )}
    </div>
  );
};
