const notificationPage = '.notification';
const nextButton = `${notificationPage} .permissions-connect-choose-account__bottom-buttons button:nth-child(2)`;
const allowToSpendButton = `${notificationPage} [data-testid="page-container-footer-cancel"]`;
const rejectToSpendButton = `${notificationPage} [data-testid="page-container-footer-next"]`;

const permissionsPage = '.permissions-connect';
const connectButton = `${permissionsPage} .permission-approval-container__footers button:nth-child(2)`;
const cancelButton = `${permissionsPage} .permission-approval-container__footers button:nth-child(1)`;

const confirmPageHeader = `${notificationPage} .confirm-page-container-header`;
const confirmPageContent = `${notificationPage} .confirm-page-container-content`;
const confirmPageGasFeeSection = `${confirmPageContent} .confirm-page-container-content__gas-fee`;
const gasFeeLabel = `${confirmPageGasFeeSection} .currency-display-component__text`;
const gasFeeInput = `${confirmPageGasFeeSection} .advanced-gas-inputs__gas-edit-row:nth-child(1) .advanced-gas-inputs__gas-edit-row__input`;
const gasLimitInput = `${confirmPageGasFeeSection} .advanced-gas-inputs__gas-edit-row:nth-child(2) .advanced-gas-inputs__gas-edit-row__input`;
const totalLabel = `${confirmPageContent} div:nth-child(2) > .confirm-detail-row .currency-display-component__text`;
const rejectButton = `${confirmPageContent} [data-testid="page-container-footer-cancel"]`;
const confirmButton = `${confirmPageContent} [data-testid="page-container-footer-next"]`;

module.exports.notificationPageElements = {
  notificationPage,
  nextButton,
  allowToSpendButton,
  rejectToSpendButton,
};

module.exports.permissionsPageElements = {
  permissionsPage,
  connectButton,
  cancelButton,
};

module.exports.confirmPageElements = {
  notificationPage,
  confirmPageHeader,
  confirmPageContent,
  confirmPageGasFeeSection,
  gasFeeLabel,
  gasFeeInput,
  gasLimitInput,
  totalLabel,
  rejectButton,
  confirmButton,
};
