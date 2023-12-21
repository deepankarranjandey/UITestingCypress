
import { registerPage } from '../../pages/registerPage.js';
const registerObject = new registerPage()
import registerData  from '../../fixtures/registerData.json';

describe('test automation', () => {

    it('should register a new user', () => {
        registerObject.openURL();
        registerObject.enterFirstName(registerData.firstName);
        registerObject.enterLastName(registerData.lastName);
        registerObject.enterEmail(registerData.email);
        registerObject.enterTelephone(registerData.telephone);
        registerObject.enterPassword(registerData.password);
        registerObject.enterConfirmPassword(registerData.confirmPassword);
        registerObject.clickPrivacyPolicy();
        registerObject.clickContinueButton();
       
    })
    
});