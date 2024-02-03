class LoginPage{
    txtUserName = "#username";
    txtPassword = "#password";
    btnLogin = "#login";
    invalidErr = "#login_form > table > tbody > tr:nth-child(5) > td:nth-child(2) > div > b";
    

    logintoApplication(userName, passWord)
    {
        cy.get(this.txtUserName).type(userName);
        cy.get(this.txtPassword).type(passWord);
        cy.get(this.btnLogin).click();

    }

    verifyInvalidErrorMsg(errorMsg)
    {
        cy.get(this.invalidErr).should('have.text', errorMsg)
    }
}
export default LoginPage;