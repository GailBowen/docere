
var fibonacci = new Fibonacci();

function Fibonacci()
{
    this.number = 1;
    this.previousNumber = 0;
    this.increment = function()
    {
        var newNumber = this.number + this.previousNumber;
        this.previousNumber = this.number;
        this.number = newNumber;
    }
}

function ChangeNumber()
{
    fibonacci.increment();
    console.log(document.getElementById("txtName").value);
    
    var input = document.getElementById("txtName");
    input.value = fibonacci.number;
}

