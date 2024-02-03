class BookHotel
{

    txtFirstName = "#first_name";
    txtLastName = "#last_name";
    txtAddress = "#address";
    txtCCnum = "#cc_num";
    ddCreditType = "#cc_type";
    ddexpMonth = "#cc_exp_month";
    ddexpYear = "#cc_exp_year";
    txtCvvNum = "#cc_cvv";
    btnBookNow = "#book_now";
    btnCancel = "#cancel";
    errFirstName = "#first_name_span";
    errLastName = "#last_name_span";
    errAddress = "#address_span";
    errCCNum = "#cc_num_span";
    errCCType = "#cc_type_span";
    errCCExp = "#cc_expiry_span";
    errCVVnum = "#cc_cvv_span";
    bookConfirmHeader = "#booking_form td.login_title"
    orderNo = "#order_no"

    bookHotel()
    {
        cy.get(this.btnBookNow).click();
    }

    cancelBooking()
    {
        cy.get(this.btnCancel).click();
    }

    enterPersonalDetails(value1, value2, value3)
    {
        cy.get(this.txtFirstName).type(value1);
        cy.get(this.txtLastName).type(value2);
        cy.get(this.txtAddress).type(value3);

    }

    validateBookingPage()
    {
        cy.url().should('eq', 'https://adactinhotelapp.com/BookHotel.php')
    }
    enterCardDetails(value1, value2, value3, value4, value5)
    {
    cy.get(this.txtCCnum).type(value1);
    cy.get(this.ddCreditType).select(value2);
    cy.get(this.ddexpMonth).select(value3);
    cy.get(this.ddexpYear).select(value4);
    cy.get(this.txtCvvNum).type(value5);
}



}

export default BookHotel