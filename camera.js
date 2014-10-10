


// $(document).ready(function(){
// 	$('#video')[0].play();
// 	$('#video')[131000].stop(function(){
// 		$(this).fadeOut(1000);
// 	});
// });
$(document).ready(function(){
 	$('#video')[0].play();
 	$("#video").bind('ended', function(){
		console.log("video ended");
    	$("#video").fadeOut(500,function(){
      	$("#video").remove();
    	})
    $("#masking").fadeIn(500);
 //    $(function(){
	// $( '#example' ).photobooth().on( "image", function( event, dataUrl ){
	// 	$( "#gallery" ).show().html( '<img src="' + dataUrl + '" >');
	// 	});
	// 	setTimeout(function(){
	// 		$('.trigger').click();
	// 	}, 5000);
	// });

	})
	$(function(){
		$( '#example' ).photobooth().on( "image", function( event, dataUrl ){
			$( "#gallery" ).show().html( '<img src="' + dataUrl + '" >');
		});
		setTimeout(function(){
			$('.trigger').click();
		}, 5000);
	});
});


// $(function(){
// 	$( '#example' ).photobooth().on( "image", function( event, dataUrl ){
// 		$( "#gallery" ).show().html( '<img src="' + dataUrl + '" >');
// 	});
// 	setTimeout(function(){
// 		$('.trigger').click();
// 	}, 136000);
// });
