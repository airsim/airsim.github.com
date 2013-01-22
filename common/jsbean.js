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