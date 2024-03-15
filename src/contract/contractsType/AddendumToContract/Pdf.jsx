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
        <PdfHeader>
          <h2 className="titleContract">Addendum to contract</h2>
        </PdfHeader>

        <PdfRow>
          Addendum No.
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="AddendumNumber"
            paragraph={form.completed}
          />
          to the Contract with the Effective Date of
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="EffectiveDate"
            paragraph={form.completed}
          />
          between
        </PdfRow>
        <PdfRow>
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="Seller"
            paragraph={form.completed}
          />
          (Seller)
        </PdfRow>
        <PdfRow>
          and
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="Buyer"
            paragraph={form.completed}
          />
          (Buyer)
        </PdfRow>
        <PdfRow>
          concerning the property described as:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="PropertyAddress"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow>
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
        <PdfRow styles={{ marginBottom: "10px" }}>
          Buyer:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="BuyerName1"
            paragraph={form.completed}
          />
          Date:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="BuyerDate1"
            type={"date"}
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ marginBottom: "10px" }}>
          Buyer:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="BuyerName2"
            paragraph={form.completed}
          />
          Date:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="BuyerDate2"
            type={"date"}
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ marginBottom: "10px" }}>
          Seller:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="SellerName1"
            paragraph={form.completed}
          />
          Date:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="SellerDate1"
            type={"date"}
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow>
          Seller:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="SellerName2"
            paragraph={form.completed}
          />
          Date:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="SellerDate2"
            type={"date"}
            paragraph={form.completed}
          />
        </PdfRow>
      </PdfPage>
    </PdfDocument>
  );
};
