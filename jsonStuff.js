function doStuff()
{
    var menu = {"Menu":
    {Items:
        [
        {"Name":"Soup","Price":5.99,"Calories":600,"Type":"Food"},
        {"Name":"Cake","Price":15.99,"Calories":1600,"Type":"Food"},
        ]}
      };

    //var objJSON = JSON.parse(menu);
    console.log(menu.Menu.Items[0].Name);
}