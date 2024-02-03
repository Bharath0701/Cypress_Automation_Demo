class SelectHotel
{
    btnRadio = "#radiobutton_0"
    hotelName = "#hotel_name_0";
    btnSubmit = "#continue";


    SelectHotel()
    {
        cy.get(this.btnRadio).click();
    }

    continue()
    {
        cy.get(this.btnSubmit).click();
    }
}

export default SelectHotel