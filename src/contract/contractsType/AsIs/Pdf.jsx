import React from "react";
import {
  PdfDocument,
  PdfHeader,
  PdfPage,
  PdfRow,
  PdfInput,
  PdfRadio,
  PdfFooter,
  PdfTextArea,
} from "../../contractComponents/PdfComponents";

export const PdfAsIs = ({ handleInputForm, form, flyerRef }) => {
  return (
    <PdfDocument flyerRef={flyerRef}>
      <PdfPage>
        <PdfHeader styles={{ marginLeft: "10px" }}>
          <h2 className="titleContract">
            "AS IS" Residential Contract For Sale And Purchase
          </h2>
          <p>
            THIS FORM HAS BEEN APPROVED BY THE FLORIDA REALTORS AND THE FLORIDA
            BAR
          </p>
        </PdfHeader>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "5px" }}>1*</span>
          <span style={{ fontWeight: "bold" }}>PARTIES:</span>
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="Seller"
            paragraph={form.completed}
          />
          ("Seller"),
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "5px" }}>2*</span>
          and
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="Buyer"
            paragraph={form.completed}
          />
          ("Buyer"),
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "5px" }}>3</span>
          agree that Seller shall sell and Buyer shall buy the following
          described Real Property and Personal Property
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "5px" }}>4</span>
          (collectively "Property") pursuant to the terms and conditions of this
          AS IS Residential Contract For Sale And Purchase
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "5px" }}>5</span>
          and any riders and addenda ("Contract"):
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "5px" }}>6</span>
          <span style={{ fontWeight: "bold" }}>1. PROPERTY DESCRIPTION:</span>
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "10px" }}>7*</span>
          (a) Street address, city, zip:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="PropertyAddress"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "10px" }}>8*</span>
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
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "10px" }}>9*</span>
          (c) Real Property: The legal description is
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>10</span>
          <PdfTextArea
            form={form}
            handleInputForm={handleInputForm}
            attribute="RealProperty"
            height={"25px"}
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>12</span>
          together with all existing improvements and fixtures, including
          built-in appliances, built-in furnishings and
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>13</span>
          attached wall-to-wall carpeting and flooring ("Real Porperty") unless
          specifically excluded in Paragraph 1(e) or
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>14</span>
          by other terms of this Contract.
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "10px" }}>15</span>
          (d) Personal Property: Unless excluded in Paragraph 1(e) or by other
          terms of this Contract, the following items
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>16</span>
          which ar owned by Seller and existing on the Property as of the date
          of the initial offer are included in the
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>17</span>
          purchase: range(s)/oven(s), regrigerator(s), dishwasher(s), disposal,
          ceiling fan(s), light fixture(s), drapery rods
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>18</span>
          and draperies, blinds, window treatments, smoke detector(s), garage
          door opener(s), thermostat(s),
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>19</span>
          doorbell(s), television wall mount(s) and television mounting
          hardware, security gate and other access
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>20</span>
          devices, mailbox keys, and storm shutters/storm protection items and
          hardware ("Personal Property").
        </PdfRow>

        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "18px" }}>21*</span>
          Other Personal Property items included in this purchase are:
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>22</span>
          <PdfTextArea
            form={form}
            handleInputForm={handleInputForm}
            attribute="PropertyItemsIncluded"
            height={"12px"}
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>23</span>
          Personal Property is included in the Purchase Price, has no
          contributory value, and shall be left for the Buyer.
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "10px" }}>24*</span>
          (e) The following items are excluded from the purchase:
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>25</span>
          <PdfTextArea
            form={form}
            handleInputForm={handleInputForm}
            attribute="PropertyItemsExcluded"
            height={"12px"}
            paragraph={form.completed}
          />
        </PdfRow>

        <PdfRow styles={{ marginTop: "5px" }}>
          <span style={{ fontSize: "5px", paddingRight: "150px" }}>26*</span>
          <span style={{ fontWeight: "bold", lineHeight: "2" }}>
            PURCHASE PRICE AND CLOSING
          </span>
        </PdfRow>

        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "5px" }}>27*</span>
          <span style={{ fontWeight: "bold" }}> 2. PURCHASE PRICE</span>
          <span style={{ fontWeight: "normal" }}>
            (U.S. currency):
            .......................................................................................
            $
          </span>
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="PurchasePrice"
            paragraph={form.completed}
            type="number"
          />
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "10px" }}>28*</span>
          (a) Initial deposit to be held in escrow in the amount of
          <span style={{ fontWeight: "bold" }}>
            {" "}
            (checks subject to Collection) .........
          </span>
          $
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="InitialDepositAmount"
            paragraph={form.completed}
            type="number"
          />
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>29</span>
          The initial deposit made payable and delivered to "Escrow Agent" named
          below
        </PdfRow>
        <PdfRow styles={{ paddingRight: "70px" }}>
          <span style={{ fontSize: "5px", paddingRight: "18px" }}>30*</span>
          <span style={{ fontWeight: "bold" }}>(CHECK ONE):</span>
          <span>(i)</span>
          <PdfRadio
            form={form}
            handleInputForm={handleInputForm}
            attribute="DepositChoice(i)"
            paragraph={form.completed}
            name="DepositChoice"
          />
          accompanies offer or (ii)
          <PdfRadio
            form={form}
            handleInputForm={handleInputForm}
            attribute="DepositChoice(ii)"
            paragraph={form.completed}
            name="DepositChoice"
          />
          is to be made within
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="DaysChoice(ii)"
            paragraph={form.completed}
            type="number"
          />
          {"("}if left
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>31</span>
          black, then 3{")"} days after Effective Date. IF NEITHER BOX IS
          CHECKED, THEN
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>32</span>
          OPTION (ii) SHALL BE DEEMED SELECTED.
        </PdfRow>
        <PdfRow styles={{ paddingRight: "60px" }}>
          <span style={{ fontSize: "5px", paddingRight: "18px" }}>33*</span>
          Escrow Agent Name:
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="EscrowAgentName"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow styles={{ paddingRight: "60px" }}>
          <span style={{ fontSize: "5px", paddingRight: "18px" }}>34*</span>
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
            type="number"
          />
        </PdfRow>
        <PdfRow styles={{ paddingRight: "60px" }}>
          <span style={{ fontSize: "5px", paddingRight: "18px" }}>35*</span>
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
        <PdfRow styles={{ paddingRight: "60px" }}>
          <span style={{ fontSize: "5px", paddingRight: "10px" }}>36*</span>
          (b) Additional deposit to be delivered to Escrow Agent within
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="AdditionalDepositTime"
            paragraph={form.completed}
            type="number"
          />
          (if left black, then 10)
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "18px" }}>37*</span>
          days after Effective
          Date......................................................................................................$
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="AdditionalDepositAmount"
            paragraph={form.completed}
            type="number"
          />
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>38</span>
          (All deposits paid or agreed to be paid, are collectively referred to
          as thw "Deposit")
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "10px" }}>39*</span>
          (c) Financing: Express as a dollar amount or percentage ("Loan
          Amount") see Paragraph 8 ........
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="FinancingPercentage"
            paragraph={form.completed}
          />
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "10px" }}>40*</span>
          (d) Other:
          ..............................................................................................................................
          $
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="Other"
            paragraph={form.completed}
            type="number"
          />
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "13px" }}>41</span>
          (e) Balance to close (not including Buyers's closing costs, prepaids
          and prorations) by wire
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "18px" }}>42*</span>
          transfer or other Collected funds (see STANDARD S)
          .......................................................... $
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="BalanceToClose"
            paragraph={form.completed}
            type="number"
          />
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "5px" }}>43</span>
          <span style={{ fontWeight: "bold" }}>
            {" "}
            3. TIME FOR ACCEPTANCE OF OFFER AND COUNTER-OFFERS; EFFECTIVE DATE:
          </span>
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "10px" }}>44</span>
          (a) If not signed by Buyer and Seller, and an executed copy delivered
          to all parties on or before
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>45*</span>
          <PdfInput
            form={form}
            handleInputForm={handleInputForm}
            attribute="EffectiveDate"
            paragraph={form.completed}
            type="date"
          />
          , this offer shall be deemed withdrawn and the Deposit, if any, shall
          be returned to
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>46</span>
          Buyer. Unless otherwise stated, time for acceptance of any
          counter-offers shall be within 2 days after the day
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>47</span>
          the counter-offer is delivered.
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "10px" }}>48</span>
          (b) The effective date of this Contract shall be the date when the
          last one of the Buyer and Seller has signed or
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "20px" }}>49</span>
          initialed and delivered this offer or final counter-offer ("Effective
          Date").{" "}
        </PdfRow>

        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "5px" }}>50</span>
          <span style={{ fontWeight: "bold" }}>4. CLOSING; CLOSING DATE:</span>
          <span style={{ fontWeight: "normal" }}>
            The closing of this transaction shall occur when all funds required
            for closing are
          </span>
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "12px" }}>51</span>
          received by Closing Agent and Collected pursuant to STANDARD S and all
          closing documents required to be
        </PdfRow>
        <PdfRow>
          <span style={{ fontSize: "5px", paddingRight: "12px" }}>52</span>
          furnished by each party pursuant to this Contract are delivered
          ("Closing"). Unless modified by other provisions of
        </PdfRow>
        <PdfFooter pageNumber={1} totalPages={13}></PdfFooter>
      </PdfPage>
    </PdfDocument>
  );
};
