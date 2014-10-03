$(function(){
	$( '#example' ).photobooth().on( "image", function( event, dataUrl ){
		$( "#gallery" ).show().html( '<img src="' + dataUrl + '" >');
	});

	setTimeout(function(){
		$('.trigger').click();
	}, 15000);
});