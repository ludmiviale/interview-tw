import React from "react";
import {
  PdfDocument,
  PdfHeader,
  PdfInput,
  PdfPage,
  PdfRow,
  PdfTextArea,
} from "../../contractComponents/PdfComponents";
export const PdfAddendumToContract = ({ handleInputForm, form, flyerRef }) => {
  return (
    <PdfDocument flyerRef={flyerRef}>
      <PdfPage>
        <PdfHeader styles={{ marginBottom: "20px", marginTop: "-20px" }}>
          <h2 className="titleContract">Addendum to contract</h2>
        </PdfHeader>

        <PdfRow styles={{ fontSize: "8px" }}>
          Addendum No.
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="AddendumNumber"
            paragraph={form.completed}
            type="number"
          />
          to the Contract with the Effective Date of
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="EffectiveDate"
            paragraph={form.completed}
            type="date"
          />
          between
        </PdfRow>
        <PdfRow styles={{ fontSize: "8px" }}>
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="Seller"
            paragraph={form.completed}
          />
          (Seller)
        </PdfRow>
        <PdfRow styles={{ fontSize: "8px" }}>
          and
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="Buyer"
            paragraph={form.completed}
          />
          (Buyer)
        </PdfRow>
        <PdfRow styles={{ fontSize: "8px" }}>
          concerning the property described as:
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="PropertyAddress"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ fontSize: "8px" }}>
          (the "Contract"). Seller and Buyer make the following terms and
          conditions part of the contract
        </PdfRow>
        <PdfRow>
          <PdfTextArea
            form={form}
            handleInputForm={handleInputForm}
            attribute="TermsAndConditions"
            height={"280px"}
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow
          styles={{ marginBottom: "10px", marginTop: "10px", fontSize: "8px" }}
        >
          Buyer:
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="BuyerName1"
            paragraph={form.completed}
          />
          Date:
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="BuyerDate1"
            paragraph={form.completed}
            type="date"
          />
        </PdfRow>
        <PdfRow styles={{ marginBottom: "10px", fontSize: "8px" }}>
          Buyer:
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="BuyerName2"
            paragraph={form.completed}
          />
          Date:
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="BuyerDate2"
            paragraph={form.completed}
            type="date"
          />
        </PdfRow>
        <PdfRow styles={{ marginBottom: "10px", fontSize: "8px" }}>
          Seller:
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="SellerName1"
            paragraph={form.completed}
          />
          Date:
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="SellerDate1"
            paragraph={form.completed}
            type="date"
          />
        </PdfRow>
        <PdfRow styles={{ marginBottom: "10px", fontSize: "8px" }}>
          Seller:
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="SellerName2"
            paragraph={form.completed}
          />
          Date:
          <PdfInput
            styles={{ padding: "8px" }}
            form={form}
            handleInputForm={handleInputForm}
            attribute="SellerDate2"
            paragraph={form.completed}
            type="date"
          />
        </PdfRow>
      </PdfPage>
    </PdfDocument>
  );
};
