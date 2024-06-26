import React from "react";
import { useState } from "react";
import jsPDF from "jspdf";
import { ContractsInfo } from "../ContractsInfo";
import { Questions } from "../../contractComponents/Questions";
import { PdfAddendumToContract } from "./Pdf";
import { Sections } from "../../contractComponents/Sections";
import BtnStandart from "../../../components/BtnStandart";
import DocumentActions from "../../../components/DocumentActions";

export const AddendumToContract = ({
  handleInputForm,
  form,
  setForm,
  flyerRef,
  AddContract,
}) => {
  const information = ContractsInfo.find((e) => e.key === form.key);

  const numberOfSections = information?.sections?.length;
  const unitPercentage = 100 / numberOfSections;

  const [progress, setProgress] = useState(
    form?.section
      ? (form.section - 1) * unitPercentage + unitPercentage
      : unitPercentage
  );

  const handleProgress = (section) => {
    const targetProgress = (section - 1) * unitPercentage + unitPercentage;
    setProgress(targetProgress);
    handleInputForm({ section });
  };

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
        // En lugar de guardar el documento, obtenemos los datos del documento PDF como un Blob
        const pdfBlob = doc.output("blob");

        // Creamos un objeto URL a partir del Blob
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Abrimos una ventana emergente con la URL del documento PDF
        window.open(pdfUrl, "_blank");

        // Liberamos la URL del objeto
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
          <div>
            <DocumentActions
              form={form}
              setForm={setForm}
              flyerRef={flyerRef}
              handleInputForm={handleInputForm}
              handleGeneratePdf={handleGeneratePdf}
              handlePrintPdf={handlePrintPdf}
            />
            <PdfAddendumToContract
              handleInputForm={handleInputForm}
              form={form}
              flyerRef={flyerRef}
            />
          </div>
        </>
      ) : (
        <>
          <Sections
            information={information}
            handleInputForm={handleInputForm}
            form={form}
            progress={progress}
            handleProgress={handleProgress}
          />
          {form.section < information?.sections?.length ? (
            <Questions
              information={information}
              handleInputForm={handleInputForm}
              form={form}
              AddContract={AddContract}
              progress={progress}
              handleProgress={handleProgress}
            />
          ) : (
            <>
              <BtnStandart
                type="primary"
                action={() => {
                  handleInputForm({ completed: true });
                  AddContract();
                }}
                children={<i className="bi bi-floppy-fill"></i>}
                marginRight="10px"
              />
              <PdfAddendumToContract
                handleInputForm={handleInputForm}
                form={form}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};
