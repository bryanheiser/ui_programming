$(document).ready(function() {
	$("#dialer_content").show();
	$("#contact_list_content").hide();
	$("#add_contact_content").hide();
	$("#help_content").hide();
});

$("#numPad button").click(function() {
	$("#enterNumber").val($("#enterNumber").val() + this.innerText);
});

$("#clear_id").click(function() {
	$("#enterNumber").val("");
});

$("#enter_id").click(function(){
	$("#enterNumber").val(eval($("#enterNumber").val()));
});

document.addEventListener("keydown", function ( event ) {
	if ( event.shiftKey ) {
		if ( event.which == 187 ) {
			$("#enterNumber").val($("#enterNumber").val() + '+');
		}
		else if ( event.which == 56 ) {
			$("#enterNumber").val($("#enterNumber").val() + '*');
		}
	}
	else if( event.which == 13 ){
		$("#enterNumber").val(eval($("#enterNumber").val()));
	}
	else if ( event.which == 189 ) {
		$("#enterNumber").val($("#enterNumber").val() + '-');
	}
	else if ( event.which == 191 ) {
		$("#enterNumber").val($("#enterNumber").val() + '/');
	}
	else if ( event.which == 68 ) {
		$("#enterNumber").val("");
	}
	else if ( event.which >= 48 && event.which <= 57 ) {
		var entry = event.which - 48;
		$("#enterNumber").val($("#enterNumber").val() + entry.toString());
	}
});