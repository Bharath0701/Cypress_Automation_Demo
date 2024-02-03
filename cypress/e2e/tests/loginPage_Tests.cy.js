import LoginPage from "../pages/LoginPage.js"
describe("Login Page Tests",()=>{
    
    let login;
    let user;
    let data;

    before(()=>{
        cy.fixture('userdatas').then((value) =>{
            user = value
        })
        cy.fixture('Testdata').then((datavalue) =>{
            data = datavalue
        })
    })

    beforeEach(()=>{
        cy.visit('');
    })

    it("Should able to Login with Valid Credentials",()=>{
       
        
        login = new LoginPage();
        login.logintoApplication(user.validUser.email, user.validUser.password);
        cy.url().should('eq',data.searchPageURL);
    });

    it("Shouldn't able to Login with In Valid Credentials",()=>{

        login = new LoginPage();
        login.logintoApplication(user.invalidUser.email,user.invalidUser.password);
        login.verifyInvalidErrorMsg(data.err_InvalidCred);
    });

})