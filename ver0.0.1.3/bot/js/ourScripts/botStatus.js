$(function(){
	$("#avail li").live('click',function(){	
		b_val = $(this).text();
								
		$(this).fadeOut();							
		$.post("updateBotStatus.php",{id:'avail',b_name:b_val},function(data){
			$("#botsInUse ").append(data); 
		});																	
	});
					
	$("#botsInUse li").live('click',function(){	
		b_val = $(this).text();								
		$(this).fadeOut();
		$.post("updateBotStatus.php",{id:'botsInUse',b_name:b_val},function(data){
			$("#avail ").append(data);
		});
	});
});		
						
				/*Currently of no use : date = 14 nov 2011 
				
				function addToUseBot(content)
				{
					parDiv = document.getElementById('botsInUse');
					childEl = document.createElement('li');
					
					parDiv.appendChild(childEl);	
					
								
				}
				function addToAvailBot(content)
				{
					parDiv = document.getElementById('avail');
					childEl = document.createElement('li');
					
					parDiv.appendChild(childEl);	
					
								
				}*/
