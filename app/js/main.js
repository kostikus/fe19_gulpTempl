$(document).ready(function(){

	$('#req').click(function(){
		var someData = {name: 'Some name'};
		$.ajax({
			type: 'GET',
			url: 'content.html',
			data: someData,
			success: function(res){
				$('#content').html(res)
			}
		})
	})

})