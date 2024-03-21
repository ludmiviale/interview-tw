import React from "react";
import { ContractsInfo } from "../ContractsInfo";
import { Questions } from "../../contractComponents/Questions";
import { PdfAsIs } from "./Pdf";
import jsPDF from "jspdf";
import { Sections } from "../../contractComponents/Sections";
import BtnStandart from "../../../components/BtnStandart";
import DocumentActions from "../../../components/DocumentActions";

export const AsIs = ({
  handleInputForm,
  form,
  setForm,
  flyerRef,
  AddContract,
}) => {
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
        <div>
          <DocumentActions
            form={form}
            setForm={setForm}
            flyerRef={flyerRef}
            handleInputForm={handleInputForm}
            handleGeneratePdf={handleGeneratePdf}
            handlePrintPdf={handlePrintPdf}
          />
          <PdfAsIs
            handleInputForm={handleInputForm}
            form={form}
            flyerRef={flyerRef}
          />
        </div>
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
              <BtnStandart
                type="primary"
                action={() => {
                  handleInputForm({ completed: true });
                  AddContract();
                }}
                children={<i className="bi bi-floppy-fill"></i>}
                marginRight="10px"
              />

              <PdfAsIs handleInputForm={handleInputForm} form={form} />
            </>
          )}
        </>
      )}
    </div>
  );
};
