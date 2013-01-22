//Dependencies Popup
function showDependencies(pageUrl,divId)
{
	var current_dialog = jquery('<div>').dialog({
		width: 1080,
		height: 470,			
		resizable: false,
		modal: true,
		open: function ()
		{
			jquery(this).load(pageUrl);
		}
	});	
	jquery(current_dialog).dialog('option', 'position', 'center');
}

/*
function showPopup(divId)
{
	jquery( divId ).dialog({
		width: 'auto',
		modal: true,
		show: "blind"
	});
}*/

function accordionShowGeneralSection(section)
{
	jquery( "#accordion" ).accordion("option", "active", section );
}