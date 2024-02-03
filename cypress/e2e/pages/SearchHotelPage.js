class SearchHotel{
    msgWelcome = "body > table.content > tbody > tr:nth-child(1) > td:nth-child(1)";
    ddLocation = "#location";
    ddHotels = "#hotels";
    ddRoomType = "#room_type";
    ddNoOfRooms = "#room_nos";
    userWelcome = "username_show";
    ddAdultRoom = "#adult_room";
    ddChildRoom = "#child_room";
    txtDateCheckIn = "#datepick_in";
    txtDateCheckout = "#datepick_out";
    btnSubmit = "#Submit";

    selectLocation(value)
    {
        cy.get(this.ddLocation).select(value)
    }

    selectHotels(value)
    {
        cy.get(this.ddHotels).select(value)
    }

    selectRoomType(value)
    {
        cy.get(this.ddRoomType).select(value)
    }

    selectNoofRooms(value)
    {
        cy.get(this.ddNoOfRooms).select(value)
    }

    selectAdultRoom(value)
    {
        cy.get(this.ddAdultRoom).select(value)
    }

    selectChildRoom(value)
    {
        cy.get(this.ddChildRoom).select(value)
    }

    enterCheckInCheckOutDetails(value1, value2)
    {
        cy.get(this.txtDateCheckIn).type(value1);
        cy.get(this.txtDateCheckout).type(value2);
    }

    submitDetails()
    {
        cy.get(this.btnSubmit).click();
    }
}

export default SearchHotel