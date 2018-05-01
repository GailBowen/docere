window.onload  = function(){
    //var input = document.getElementById("txtName");
    //input.value = window.location.search.substr(1);

    new URL(location.href).searchParams.get('year')

    const params = new URL(location.href).searchParams;
    var cardNumber = params.get('cardNumber');
    document.getElementById("txtName").value = cardNumber;
}
