jquery(document).ready(function() 
{
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
	
	var currentDialog = jquery( divId ).dialog({
		height: heightpx,
		width: widthpx,
		title: dialogTitle,
		modal: true,
		show: "blind",
	});
}

function accordionShowSection(section)
{
	jquery( "#accordion" ).accordion("option", "active", section );
}