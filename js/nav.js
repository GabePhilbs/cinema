function callNav(){    

	var myNav = '<!-- beginning of the navbar block -->'


	myNav +='<!-- this div just occupies space, to give the page a responsive margin for the menu to be in -->'
		myNav +='<nav class="navbar navbar-default navbar-fixed-top container-fluid ">'
			myNav +='	<div class="row top-row">'

			    myNav +='	<div class="navbar-text col-2-xs col-4-sm col-md-5 col-lg-5" ></div>'
				    myNav +='<div class="navbar-text col-xs-4 col-sm-2 col-md-1 col-lg-1" ><a href="#">Home</a></div>'
				   myNav +=' <div class="navbar-text col-xs-4 col-sm-2 col-md-1 col-lg-1" ><a href="#">Films</a></div>'
				   // myNav +=' <div class="navbar-text col-xs-4 col-sm-2 col-md-1 col-lg-1" ><a href="#">film 2</a></div>'
				   // myNav +=' <div class="navbar-text col-xs-4 col-sm-2 col-md-1 col-lg-1" ><a href="#">film 3</a></div>'
				   // myNav +=' <div class="navbar-text col-xs-4 col-sm-2 col-md-1 col-lg-1" ><a href="#">film 4</a></div>'   
				   // myNav +=' <div class="navbar-text col-xs-4 col-sm-2 col-md-1 col-lg-1" ><a href="#">film 5</a></div>'
			  
			myNav +='</div>'
		myNav +='</div>'

		myNav +='<!--NAVBAR BEGINS-->'
		myNav +='<nav class="navbar navbar-default navbar-fixed-top container-fluid ">'
	

		    	myNav +='<div class="row menu-row">'

			    	myNav +='<div class="navbar-text col-xs-2 col-sm-4 col-md-4 col-lg-4" ></div>'
				   myNav +=' <div class="navbar-text col-xs-4 col-sm-2 col-md-2 col-lg-2" ><a href="#pageTop" class="smoothScroll" id ="homeButton">home</a></div>'
				    myNav +='<div class="navbar-text col-xs-4 col-sm-2 col-md-2 col-lg-2" ><a href="#timeline" class="smoothScroll">Films</a></div>'
				   //  myNav +='<div class="navbar-text col-xs-4 col-sm-2 col-md-1 col-lg-1" ><a href="#">film 2</a></div>'
				   //  myNav +='<div class="navbar-text col-xs-4 col-sm-2 col-md-1 col-lg-1" ><a href="#">film 3</a></div>'
				   // myNav +=' <div class="navbar-text col-xs-4 col-sm-2 col-md-1 col-lg-1" ><a href="#">film 4</a></div> '   
				   // myNav +=' <div class="navbar-text col-xs-4 col-sm-2 col-md-1 col-lg-1" ><a href="#">film 5</a></div>'
			  
		    myNav +='</div>'
		   
	
		  
		myNav +='</nav>'

myNav +='<!-- end of the navbar block -->'





 return myNav;}

 $('nav').html(callNav());

$('#homeButton').click(function(){
	film = 1;
	loadBody();

})



