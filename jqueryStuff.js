function doStuff()
{
  console.log($("#txtName").val());
}

//$("#txtName").css("background", "purple");

$("table td input").focus(function() 
{$(this).parent().parent().css("background-color", "purple");});

