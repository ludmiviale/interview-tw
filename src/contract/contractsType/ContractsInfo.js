export const ContractsInfo = [
  {
    key: "Addendum To Contract",
    sections: [
      { key: "Addendum N°", position: 1 },
      { key: "Parties", position: 2 },
      { key: "Property", position: 3 },
      { key: "Terms And Conditions", position: 4 },
      { key: "More Parties", position: 5 },
      { key: "Preview", position: 6 },
    ],
    questions: [
      {
        key: "AddendumNumber",
        question: "What is the addendum N°?",
        section: "Addendum N°",
        number: true,
      },
      {
        key: "EffectiveDate",
        question: "When is the Effective date?",
        section: "Addendum N°",
        date: true,
      },
      {
        key: "Seller",
        question: "Who is the Seller?",
        section: "Parties",
      },
      {
        key: "Buyer",
        question: "Who is the Buyer?",
        section: "Parties",
      },
      {
        key: "PropertyAddress",
        question: "What is the property address?",
        section: "Property",
      },
      {
        key: "Terms And Conditions",
        question:
          "Which are the terms and conditions described for this contract?",
        section: "Terms And Conditions",
      },
      {
        key: "BuyerName1",
        question: "Who is the buyer?",
        section: "More Parties",
      },
      {
        key: "BuyerDate1",
        question: "What is the buyer birth date?",
        section: "More Parties",
        date: true,
      },
      {
        key: "BuyerInfo2",
        question:
          "If there is another buyer in the transaction please type his/her name",
        section: "More Parties",
      },
      {
        key: "BuyerDate2",
        question: "What is the co-buyer birth date?",
        section: "More Parties",
        date: true,
      },
      {
        key: "SellerName1",
        question: "Who is the seller?",
        section: "More Parties",
      },
      {
        key: "SellerDate1",
        question: "What is the buyer birth date?",
        section: "More Parties",
        date: true,
      },
      {
        key: "SellerInfo2",
        question:
          "If there is another seller in the transaction please type his/her name",
        section: "More Parties",
      },
      {
        key: "SellerDate2",
        question: "What is the co-seller birth date?",
        section: "More Parties",
        date: true,
      },
    ],
  },
  {
    key: "AS IS",
    sections: [
      { key: "Parties", position: 1 },
      { key: "Property", position: 2 },
      { key: "Purchase Price", position: 3 },
      { key: "Effective Date", position: 4 },
      { key: "Preview", position: 5 },
    ],
    questions: [
      {
        key: "Seller",
        question: "Who is the Seller?",
        section: "Parties",
      },
      {
        key: "Buyer",
        question: "Who is the Buyer?",
        section: "Parties",
      },
      {
        key: "PropertyAddress",
        question:
          "What is the street address, city, and zip code of the property?",
        section: "Property",
      },
      {
        key: "PropertyLocation",
        question: "Where is the property located?",
        section: "Property",
      },
      {
        key: "PropertyTaxId",
        question: "What is the Property Tax ID?",
        section: "Property",
      },
      {
        key: "RealProperty",
        question: "What is the legal description of the property?",
        section: "Property",
      },
      {
        key: "PropertyItemsIncluded",
        question:
          "What are the other Personal Property Items included in this purchase?",
        section: "Property",
      },
      {
        key: "PropertyItemsExcluded",
        question:
          "What are the Personal Property Items excluded from the purchase?",
        section: "Property",
      },
      {
        key: "PurchasePrice",
        question: "What is Purchase Price? (U.S. currency)",
        section: "Purchase Price",
        number: true,
      },
      {
        key: "InitialDepositAmount",
        question:
          "What is the amount of the initial deposit that will be held in escrow?",
        section: "Purchase Price",
        number: true,
      },
      {
        key: "DepositChoice",
        question: "Select one of the following options:",
        section: "Purchase Price",
        phrase: true,
      },
      {
        key: "DepositChoice(i)",
        question: "The initial deposit accompanies the offer.",
        section: "Purchase Price",
        radio: true,
      },
      {
        key: "DepositChoice(ii)",
        question: "The initial deposit is to be made after the effective date.",
        section: "Purchase Price",
        radio: true,
      },
      {
        key: "DaysChoice(ii)",
        question:
          "If you intend to pay after the effective date, how many days afterward do you plan to make the payment?",
        section: "Purchase Price",
        number: true,
      },
      {
        key: "EscrowAgentName",
        question: "Who is the Escrow Agent?",
        section: "Purchase Price",
      },
      {
        key: "EscrowAgentAddress",
        question: "What is the Escrow Agent's Address?",
        section: "Purchase Price",
      },
      {
        key: "EscrowAgentPhone",
        question: "What is the Escrow Agent's Phone?",
        section: "Purchase Price",
        number: true,
      },
      {
        key: "EscrowAgentEmail",
        question: "What is the Escrow Agent's Email?",
        section: "Purchase Price",
      },
      {
        key: "EscrowAgentFax",
        question: "What is the Escrow Agent's Fax?",
        section: "Purchase Price",
      },
      {
        key: "AdditionalDepositTime",
        question:
          "How many days after the effective date do you intend to make the payment?",
        section: "Purchase Price",
        number: true,
      },
      {
        key: "AdditionalDepositAmount",
        question:
          "What is the amount of the additional deposit that will be delivered to Escrow Agent?",
        section: "Purchase Price",
        number: true,
      },
      {
        key: "FinancingPercentage",
        question: "What is the percentage that will be financing?",
        section: "Purchase Price",
        number: true,
      },
      {
        key: "Other",
        question: "Other?",
        section: "Purchase Price",
        number: true,
      },
      {
        key: "BalanceToClose",
        question:
          "What is the remaining balance to be paid through wire transfer or other collected funds at the time of closing?",
        section: "Purchase Price",
        number: true,
      },
      {
        key: "EffectiveDate",
        question: "When is the Effective date?",
        section: "Effective Date",
        date: true,
      },
    ],
  },
];
