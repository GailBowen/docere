function testValidationFailed() {
    
    if (document.getElementById("cardNumber").value.length < 2)
    {
        return false;
    }
    else
    {
        return true;
    }
}