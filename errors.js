function DoStuff()
{
    DivideStuff(3, 0);
}

function DivideStuff(divider, divisor)
{
    try {
        if (divisor == 0)
        {
            throw  new Error("divisor cannot be zero, you idiot!", "oh dear");
        }
    } catch (error) {
        document.write(error.message);
    }

    

}