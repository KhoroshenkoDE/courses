// $(function () {
	
// 	var siza = $('p').length; 
// 	for (var i = 0; i < size; i++) {
// 		setInterval(function(){

// 		$("p:eq(" + i + ")").css('color', 'red');
// 		},1000);
// 	};
// });


var i = 0;

$(function() {
	var timer = setInterval( m ,1000);
});

function m() {
	i++;

	$("p:eq(" + (i - 1) + ")").css('background-color', 'white');
		
	$("p:eq(" + i + ")").css('background-color', 'red');

}
