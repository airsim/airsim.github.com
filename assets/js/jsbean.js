$(document).ready(function() 
{
	window.addEventListener("hashchange", function() { scrollBy(0, -50) })
	var url = window.location;
	var mySplitResult = url.toString().split("?");
	var secondValue = mySplitResult[1];
	if (secondValue === "accordion") 
	{
		var thirdValue = mySplitResult[2];
		if (thirdValue != null) 
		{
			thirdValue = parseInt(thirdValue);
			accordionShowSection(thirdValue);
		}	
	}
});

function showPopup(divId, dialogTitle, widthpx, heightpx)
{
	if (widthpx == null)
	{
		widthpx = 'auto';
	}
	if (heightpx == null)
	{
		heightpx = 'auto';
	}
	
	var currentDialog = $( divId ).dialog({
		resizable: false,
		height: heightpx,
		width: widthpx,
		title: dialogTitle,
		modal: true,
		show: "blind",
		//open: function(event, ui) {$(this).css({'max-height': 700, 'overflow-y': 'auto'});}, 
	});
}

function accordionShowSection(section)
{
	$( "#accordion" ).accordion("option", "active", section );
}