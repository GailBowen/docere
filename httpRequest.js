function makeRequest()
{

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5500/receivePostedStuff.html', false);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log("got here!");
        }
    }
    xhr.send("cardNumber=555&lorem=ipsum");
}