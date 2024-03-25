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
      <div>{children}</div>
      <div>
        <img
          src={LOGOpdf}
          alt="Logo"
          style={{
            height: "50px",
            width: "auto",
          }}
        />
      </div>
    </header>
  );
};

export const PdfFooter = ({ pageNumber, totalPages }) => {
  return (
    <footer className="footerPDF">
      <div className="firstLine">
        <div className="initials">
          <span>Buyer's Initials _______ _______</span>
        </div>
        <span>
          Page {pageNumber} of {totalPages}
        </span>
        <div className="initials">
          <span>Seller's Initials _______ _______</span>
        </div>
      </div>
      <div className="secondLine">
        <span>FloridaRealtors/FloridaBar-ASIS-6x </span>
        <span> Rev.7/23 © 2023 Florida Realtorsº and The Florida Bar. </span>
        <span>All rights reserved.</span>
      </div>
      <div className="thirdLine">
        <hr />
        <span>Serial#:</span>
        <span style={{ fontWeight: "bold" }}> 083254-700170-6307170</span>
      </div>
    </footer>
  );
};

export const PdfInput = ({
  form,
  handleInputForm,
  attribute,
  type,
  paragraph,
  styles,
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
          style={styles}
        />
      )}
    </>
  );
};

export const PdfRadio = ({ form, handleInputForm, attribute }) => {
  return (
    <input
      checked={form?.value?.find((field) => field.key === attribute)?.value}
      onChange={(e) => {
        handleInputForm({
          inputValue: e.target.checked,
          attribute: attribute,
        });
      }}
      type="radio"
      name="DepositChoice"
      className="inputContract"
    />
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
          }}
        />
      )}
    </>
  );
};
