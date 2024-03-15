import React from "react";
import LOGOpdf from "./../../assets/logoPdf.jpeg";

export const PdfDocument = ({ flyerRef, children }) => {
  return <section ref={flyerRef}>{children}</section>;
};

export const PdfPage = ({ children }) => {
  return <section className="pagePDF">{children}</section>;
};

export const PdfRow = ({ children, styles }) => {
  return (
    <div className="rowContract" style={styles}>
      {children}
    </div>
  );
};

export const PdfHeader = ({ children, styles }) => {
  return (
    <header className="headerPDF" style={styles}>
      {children}
      <img
        src={LOGOpdf}
        alt="Logo"
        style={{
          height: "70px",
          width: "auto",
        }}
      />
    </header>
  );
};

export const PdfInput = ({
  form,
  handleInputForm,
  attribute,
  type,
  paragraph,
}) => {
  return (
    <>
      {paragraph ? (
        <p className="pContract">
          {form?.value?.find((field) => field.key === attribute)?.value}
        </p>
      ) : (
        <input
          value={form?.value?.find((field) => field.key === attribute)?.value}
          onChange={(e) => {
            handleInputForm({
              inputValue: e.target.value,
              attribute: attribute,
            });
          }}
          type={type}
          className="inputContract"
        />
      )}
    </>
  );
};

export const PdfTextArea = ({
  handleInputForm,
  form,
  attribute,
  height,
  paragraph,
}) => {
  return (
    <>
      {paragraph ? (
        <p
          className="pContract"
          style={{
            minHeight: height,
            marginBottom: "10px",
          }}
        >
          {form?.value?.find((field) => field.key === attribute)?.value}
        </p>
      ) : (
        <textarea
          value={form?.value?.find((field) => field.key === attribute)?.value}
          onChange={(e) => {
            handleInputForm({
              inputValue: e.target.value,
              attribute: attribute,
            });
          }}
          className="inputContract"
          style={{
            minHeight: height,
            textAlign: "start",
            marginBottom: "10px",
          }}
        />
      )}
    </>
  );
};
