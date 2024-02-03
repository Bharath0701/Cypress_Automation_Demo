import LoginPage from "../pages/LoginPage.js"
import SearchHotel from "../pages/SearchHotelPage.js"
import BasePage from "../pages/BasePage.js"
import SelectHotel  from "../pages/SelectHotelPage.js";
import BookHotel from "../pages/BookHotelPage.js";

describe("Book Hotel Page Tests",()=>{

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

    it("Validate Error Messages while booking Hotel without Payment Details",()=>{
       
        const base = new BasePage();
        const login = new LoginPage();
        const search = new SearchHotel();
        const select = new SelectHotel();
        const book = new BookHotel();

        // login with Valid Credentials
        login.logintoApplication(user.validUser.email, user.validUser.password);

        // Search Hotel
        search.selectLocation(data.Location1);
        search.selectHotels(data.Hotel1);
        search.selectRoomType(data.roomType);
        search.selectNoofRooms(data.No6);
        search.enterCheckInCheckOutDetails(data.checkIn, data.checkOut);
        search.selectAdultRoom(data.adultRoom);
        search.selectChildRoom(data.childRoom);
        search.submitDetails();
        select.SelectHotel();
        select.continue();
        
        // Select Hotel
        book.validateBookingPage();
        book.bookHotel();

        // Validate Error Messages
        base.validatetext(book.errFirstName, data.errFrstName);
        base.validatetext(book.errLastName, data.errLastname);
        base.validatetext(book.errAddress, data.errAddress);
        base.validatetext(book.errCCNum, data.errccNum);
        base.validatetext(book.errCCType, data.errccType);
        base.validatetext(book.errCCExp, data.errExpmonth);
        base.validatetext(book.errCVVnum, data.errCvvNum);

    });

    it("Validate User should be book Hotel with Proper Details",()=>{
       
        const base = new BasePage();
        const login = new LoginPage();
        const search = new SearchHotel();
        const select = new SelectHotel();
        const book = new BookHotel();

        // login with Valid Credentials
        login.logintoApplication(user.validUser.email, user.validUser.password);

        // Search Hotel
        search.selectLocation(data.Location1);
        search.selectHotels(data.Hotel1);
        search.selectRoomType(data.roomType);
        search.selectNoofRooms(data.No6);
        search.enterCheckInCheckOutDetails(data.checkIn, data.checkOut);
        search.selectAdultRoom(data.adultRoom);
        search.selectChildRoom(data.childRoom);
        search.submitDetails();

        // Select Hotel
        select.SelectHotel();
        select.continue();
        
        // Book Hotel
        book.enterPersonalDetails(data.FirstName, data.LastName, data.Billing_Address);
        book.enterCardDetails(data.CCNum, data.CCType, data.expMonth, data.expYear, data.CVVNum);
        book.bookHotel();

        // Validate Booking Confirmation Page
        base.validateElementVisible(book.orderNo)
        cy.url().should('eq', data.bookingConfirmPageURL)

    });

})