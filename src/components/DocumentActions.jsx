import BtnStandart from "./BtnStandart";
import { PdfAsIs } from "../contract/contractsType/AsIs/Pdf";

const DocumentActions = ({
  form,
  setForm,
  flyerRef,
  handleGeneratePdf,
  handleInputForm,
  handlePrintPdf,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "5%",
      }}
    >
      {form.completed === true ? (
        <BtnStandart
          type="primary"
          action={() => setForm({ ...form, completed: false })}
          children={<i className="bi bi-pencil-fill"></i>}
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
        children={<i className="bi bi-file-arrow-down-fill"></i>}
      />
      <BtnStandart
        type="primary"
        action={handlePrintPdf}
        children={<i className="bi bi-printer-fill"></i>}
      />
    </div>
  );
};

export default DocumentActions;
