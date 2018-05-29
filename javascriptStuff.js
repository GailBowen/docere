function getCurrentLoc(onsuccess, onerror)
{
    var position = GetDeviceLocation();
    
    if (position)
    {
         onsuccess(position);
    }
    else
    {
        onerror("No luck");
    }
}

function onSuccess(pos)
{

    console.log(pos);

}


function GetDeviceLocation()
{
   return 3;
   //return null;
}

getCurrentLoc(function(position){alert(position);}, function(error){alert(error);});
