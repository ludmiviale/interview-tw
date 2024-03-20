import React from "react";
import {
  PdfDocument,
  PdfHeader,
  PdfPage,
  PdfRow,
  PdfInput,
  PdfFooter,
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
          <span style={{ fontWeight: "bold" }}>PARTIES:</span>
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="Seller"
            paragraph={form.completed}
          />{" "}
          ("Seller"),
        </PdfRow>
        <PdfRow>
          and
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="Buyer"
            paragraph={form.completed}
          />{" "}
          ("Buyer"),
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
          shutters/storm protection items and
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          hardware ("Personal Property").
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
          .................................................................... $
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
          $
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
        <PdfRow styles={{ paddingLeft: "23px" }}>
          <span style={{ fontWeight: "bold" }}>(CHECK ONE):</span>
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="DepositChoice(i)"
            paragraph={form.completed}
            type={"checkbox"}
          />
          (i) accompanies offer or
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="DepositChoice(ii)"
            paragraph={form.completed}
            type={"checkbox"}
          />
          (ii) is to be made within
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="DaysChoice(ii)"
            paragraph={form.completed}
          />{" "}
          (if left black, then 3) days
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          after Effective Date. IF NEITHER BOX IS CHECKED, THEN OPTION (ii)
          SHALL BE DEEMED SELECTED.
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          Escrow Agent Name:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="EscrowAgentName"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          Address:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="EscrowAgentAddress"
            paragraph={form.completed}
          />
          Phone:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="EscrowAgentPhone"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          E-mail:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="EscrowAgentEmail"
            paragraph={form.completed}
          />
          Fax:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="EscrowAgentFax"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "10px" }}>
          (b) Additional deposit to be delivered to Escrow Agent within
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="AdditionalDepositTime"
            paragraph={form.completed}
          />
          (if left black, tehn 10)
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          days after Effective
          Date.........................................................................................$
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="AdditionalDepositAmount"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfFooter />
      </PdfPage>

      <PdfPage>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          (All deposits paid or agreed to be paid, are collectively referred to
          as thw "Deposit")
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "10px" }}>
          (c) Financing: Express as a dollar amount or percentage ("Loan
          Amount") see Paragraoh 8 $
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="FinancingPercentage"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "10px" }}>
          (d) Other:
          ..........................................................................................................................
          $
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="Other"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "10px" }}>
          (e) Balance to close (not including Buyers's closing costs, prepaids
          and prorations) by wire
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          transfer or other Collected funds (see STANDARD S)
          ................................................... $
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="BalanceToClose"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ fontWeight: "bold" }}>
          3. TIME FOR ACCEPTANCE OF OFFER AND COUNTER-OFFERS; EFFECTIVE DATE:{" "}
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "10px" }}>
          (a) If not signed by Buyer and Seller, and an executed copy delivered
          to all parties on or before
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="EffectiveDate"
            paragraph={form.completed}
          />
          , this offer shall be deemed withdrawn and the Deposit, if any, shall
          be
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          returned to Buyer. Unless otherwise stated, time for acceptance of any
          counter-offers shall be within
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          2 days after the day the counter-offer is delivered.
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "10px" }}>
          (b) The effective date of this Contract shall be the date when the
          last one of the Buyer and Seller has
        </PdfRow>
        <PdfRow styles={{ paddingLeft: "23px" }}>
          signed or initialed and delivered this offer or final counter-offer
          ("Effective Date").{" "}
        </PdfRow>
        <PdfRow styles={{ fontWeight: "bold" }}>
          4. CLOSING; CLOSING DATE:
          <span style={{ fontWeight: "normal" }}>
            The closing of this transaction shall occur when all funds required
            for closing
          </span>
        </PdfRow>
        <PdfRow>
          are received by Closing Agent and Collected pursuant to STANDARD S and
          all closing documents required
        </PdfRow>
        <PdfRow>
          to be furnished by each party pursuant to this Contract are delivered
          ("Closing"). Unless modified by other
        </PdfRow>
        <PdfRow>provisions of</PdfRow>
        <PdfFooter />
      </PdfPage>
    </PdfDocument>
  );
};
