import {testScreenshot, openEyes, baseURL} from '../../utils/utils';
describe('Visual  Regression Tests', () => {
  const url = `${baseURL}/component/snackbar`;
  beforeEach(() => {
    cy.visit(url);
  });
  afterEach(() => {
    cy.eyesClose();
  });
  testScreenshot('snackbar', url);
  it('check snackbar-click', () => {
    openEyes('snackbar-clicked');
    cy.get('.mdc-button.show-snack').click();
    cy.wait(500);
    cy.eyesCheckWindow('snackbar-clicked');
  });
});
