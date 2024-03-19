import React from "react";
import {
  PdfDocument,
  PdfHeader,
  PdfPage,
  PdfRow,
  PdfInput,
} from "../../contractComponents/PdfComponents";

export const PdfAsIs = ({ handleInputForm, form, flyerRef }) => {
  return (
    <PdfDocument flyerRef={flyerRef}>
      <PdfPage>
        <PdfHeader>
          <h2 className="titleContract">
            "AS IS" Residential Contract For Sale And Purchase
          </h2>
          <p>
            THIS FORM HAS BEEN APPROVED BY THE FLORIDA REALTORS AND THE FLORIDA
            BAR
          </p>
        </PdfHeader>
        <PdfRow>
          PARTIES:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="Seller"
            paragraph={form.completed}
          />{" "}
          ("Seller")
        </PdfRow>
        <PdfRow>
          and
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="Buyer"
            paragraph={form.completed}
          />{" "}
          ("Buyer")
        </PdfRow>
        <PdfRow>
          agree that Seller shall sell and Buyer shall buy the following
          described Real Property and Personal Property
        </PdfRow>
        <PdfRow>
          (collectively "Property") pursuant to the terms and conditions of this
          AS IS Residential Contract For Sale
        </PdfRow>
        <PdfRow>And Purchase and any riders and addenda ("Contract"):</PdfRow>

        <PdfRow styles={{ fontWeight: "bold" }}>
          1. PROPERTY DESCRIPTION:
        </PdfRow>

        <PdfRow styles={{ paddingLeft: "10px" }}>
          (a) Street address, city, zip:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="PropertyAddress"
            paragraph={form.completed}
          />
        </PdfRow>

        <PdfRow styles={{ paddingLeft: "10px" }}>
          (b) Located in:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="PropertyLocation"
            paragraph={form.completed}
          />{" "}
          County, Florida. Property Tax ID #:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="PropertyTaxId"
            paragraph={form.completed}
          />
        </PdfRow>

        <PdfRow styles={{ paddingLeft: "10px" }}>
          (c) Real Property: The legal description is
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="RealProperty"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          together with all existing improvements and fixtures, including
          built-in appliances, built-in furnishings
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          and attached wall-to-wall carpeting and flooring ("Real Porperty")
          unless specifically excluded in
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          Paragraph 1(e) or by other terms of this Contract.
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "10px" }}>
          (d) Personal Property: Unless excluded in Paragraph 1(e) or by other
          terms of this Contract, the following
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          items which ar owned by Seller and existing on the Property as of the
          date of the initial offer are
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          included in the purchase: range(s)/oven(s), regrigerator(s),
          dishwasher(s), disposal, ceiling fan(s),
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          light fixture(s), drapery rods and draperies, blinds, window
          treatments, smoke detector(s), garage
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          door opener(s), thermostat(s), doorbell(s), television wall mount(s)
          and television mounting hardware,
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          security gate and other access devices, mailbox keys, and storm
          shutters/storm protection items
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          and hardware ("Personal Property").
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          Other Personal Property items included in this purchase are:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="PropertyItemsIncluded"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          Personal Property is included in the Purchase Price, has no
          contributory value, and shall be left for{" "}
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>the Buyer.</PdfRow>
        <PdfRow styles={{ paddingLeft: "10px" }}>
          (e) The following items are excluded from the purchase:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="PropertyItemsExcluded"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ fontWeight: "bold", paddingLeft: "150px" }}>
          PURCHASE PRICE AND CLOSING
        </PdfRow>

        <PdfRow styles={{ fontWeight: "bold" }}>
          2. PURCHASE PRICE{" "}
          <span style={{ fontWeight: "normal" }}>(U.S. currency):</span>
          .......................................................................
          $
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="PurchasePrice"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "10px" }}>
          (a) Initial deposit to be held in escrow in the amount of
          <span style={{ fontWeight: "bold" }}>
            {" "}
            (checks subject to Collection)
          </span>
          ... $
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="InitialDepositAmount"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          The initial deposit made payable and delivered to "Escrow Agent" named
          below
        </PdfRow>
      </PdfPage>
    </PdfDocument>
  );
};
