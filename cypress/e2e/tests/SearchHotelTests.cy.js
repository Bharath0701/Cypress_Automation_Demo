import LoginPage from "../pages/LoginPage.js"
import SearchHotel from "../pages/SearchHotelPage.js"
import BasePage from "../pages/BasePage.js"

describe("Search Page Tests",()=>{

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
        cy.visit('')
    })

    it("Validate Welcome Msg and user name as Expected",()=>{
        const login = new LoginPage();
        const base = new BasePage();
        const search = new SearchHotel();

        login.logintoApplication(user.validUser.email,user.validUser.password);
        base.validatetext(search.msgWelcome, data.welcomMSG)
    });


    it("Validate page navigates properly after entered valid data",()=>{
       
        const login = new LoginPage();
        const search = new SearchHotel();
        login.logintoApplication(user.validUser.email, user.validUser.password);
        search.selectLocation(data.Location1);
        search.selectHotels(data.Hotel1);
        search.selectRoomType(data.roomType);
        search.selectNoofRooms(data.No6);
        search.enterCheckInCheckOutDetails(data.checkIn, data.checkOut);
        search.selectAdultRoom(data.adultRoom);
        search.selectChildRoom(data.childRoom);
        search.submitDetails();
        cy.url().should('eq',data.selectPageURL);
    });

})