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
      },
      {
        key: "EffectiveDate",
        question: "When is the Effective date?",
        section: "Addendum N°",
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
      { key: "Closing Date", position: 5 },
      { key: "Preview", position: 6 },
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
      },
      {
        key: "InitialDepositAmount",
        question:
          "What is the amount of the initial deposit that will be held in escrow?",
        section: "Purchase Price",
      },
      {
        key: "InitialDepositTime",
        question:
          "Will the initial deposit be made payable and delivered with the offer, or is it to be made after the effective date?",
        section: "Purchase Price",
      },
      {
        key: "DepositChoice(i)",
        question: "Accompanies offer",
        section: "Purchase Price",
      },
      {
        key: "DepositChoice(ii)",
        question: "Is to be made within ... days after Effective Date",
        section: "Purchase Price",
      },
      {
        key: "DaysChoice(ii)",
        question:
          "How many days after the effective date do you intend to make the payment?",
        section: "Purchase Price",
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
        key: "AdditionalDepositAmount",
        question:
          "What is the amount of the additional deposit that will be delivered to Escrow Agent?",
        section: "Purchase Price",
      },
      {
        key: "AdditionalDepositTime",
        question:
          "How many days after the effective date do you intend to make the payment?",
        section: "Purchase Price",
      },
      {
        key: "FinancingPercentage",
        question: "What is the percentage that will be financing?",
        section: "Purchase Price",
      },
      {
        key: "Other",
        question: "Other?",
        section: "Purchase Price",
      },
      {
        key: "BalanceToClose",
        question:
          "What is the remaining balance to be paid through wire transfer or other collected funds at the time of closing?",
        section: "Purchase Price",
      },
      {
        key: "EffectiveDate",
        question: "When is the Effective date?",
        section: "Effective Date",
      },
      {
        key: "BuyerInitials",
        question: "What are the Buyer's initials?",
        section: "Closing Date",
      },
      {
        key: "SellerInitials",
        question: "What are the Seller's initials?",
        section: "Closing Date",
      },
    ],
  },
];
