// console.log('Geronimo!!! (calltimeline has been called)');

function calltimeline(){    
	
	//test if this function is getting called
	//console.log('Geronimo!!! (calltimeline has been called)');
	//test if films is being loaded
	//console.log(films);

	var timeline = '<!-- beginning of the navbar block -->'

	

	timeline +='<!-- beginning of timeline -->'
		timeline +='<div id="timeline" class="timeline-container">'

			for(var i =1930; i <= 2010; i+=10){
				var n = i.toString();
		       timeline +=' <div class="timeline-wrapper">'
		       timeline +="<h2 class='timeline-time '>"+ i +"'s</h2>"

		             timeline +='<dl class="timeline-series '+ n +'">'
		          	
		          	
   			               
						                  

		                timeline +='</dl>'
		        timeline +='</div>'
		    }



		




 return timeline;}

 $('div.timelineSpot').html(calltimeline());

// function for the timeline links
 
 	//just creating a variable for this function to work with
 	

 	//replace this with .get when the array becomes html



$.get(serverUrl+"films", function(data){
	films = data;
	// console.log(films);
	for(var i =0; i< films.length; i++){
		//get a decade from the loop
		var dec = 1930+ (i*10);
		//turn it to string
		var n = dec.toString();
		//crete content to input
		var insert =''
	insert +='<dt class="timeline-event" id="event03"><a href="#pageTop" class="smoothScroll timelineLink">' + films[i].name + '</a></dt>'
        insert +='<dd class="timeline-event-content" id="event01EX">'
               insert +=' <p>Content about the event goes here.</p>'
       insert +=' </dd>'

       // console.log(n);
       // console.log(insert);
       // console.log(films[i].name);
       //append to right decade
       $('.'+ dec).append(insert);
       }
       //href="#pageTop"
       //smoothScroll 

       //START OF TIMELINE CLICK

       // I moved the click function here, so it loads after ajax
       // otherwise the anchor would not load
       $('.timelineLink').click(function(){
			// console.log('helllo');
		    filmTitle =($(this).text());

		      // OLD WAY, SORT FILM FROM ARRAY
		    //grep gives an array, so I need to obtain the first element of it

		    var tempArray = $.grep( films, function(rightFilm) {
  				// testing if the array films loads here
  				//console.log(films);
  				return rightFilm.name == filmTitle;

			});
		    // switch content to selected film
		    film = tempArray[0];


	// 	    // NEW WAY, GET RIGHT FILM FROM SERVER

	// 	    $.get("https://cine-server-dev.herokuapp.com/this-film",
	// 		function(data)
	// 		{ 
	// 		 	 var film = data;
				
			
	// }
	// );
		    
		    

		    //loads the html used in films
		    loadBody();

		    //inserts the specific content of this film


		 //    //get director information and attach it to film
		 //    $.get(serverUrl+"this-director?name="+film.director, function(data){  

		 //    	//set a variable with chosen deirector
	 	// 	directorOfFilm = data; 
	 	// 	//console.log(films);	 		
	 		
	 	// 	//attach this director to film
	 	// 	film.director = directorOfFilm;

	 		
	 	// });
	 		


	 		console.log(film);
	 		var justtest =film.director;
	 		//WHY THE HELL IS THIS POST NOT WORKING?!!!?!?!
	 		 $.post(serverUrl+"this-director", {director: justtest}, function(data){
	 		 	

	 		 	console.log(data);
	 		 	console.log(data[0]);

	 		 	film.director = data[0];
	 		 	console.log(film.director);
	 		 	console.log(film.director.name);

	 		 	insertContent();
	 		 });



		    
		    

		    //runs the accordion
		    $( function() {
			    $( "#accordion" ).accordion({
			      collapsible: true
			    });
			  } );

		   

		  });


       //END OF TIMELINE CLICK

       //smooth scroll was not running so I called it from here
       runSmoothScroll();

});
			


//  	this works with the manually iputed anchors, but...
//  	does not work with the anchors dinamicsally generated by the loop
// $('.timelineLink').click(function(){
// 	console.log('helllo');
// 		    filmTitle =($(this).text());

// 		    //test if this thing is working so far
// 		    console.log(filmTitle);

// 		    //test if the var films is loaded
// 		    console.log("FILMS:",films);

// 		    //grep gives an array, so I need to obtain the first element of it

// 		    var tempArray = $.grep( films, function(rightFilm) {
//   				// testing if the array films loads here
//   				//console.log(films);
//   				return rightFilm.name == filmTitle;

// 			});
// 		    //see if the right film is being retrieved
// 		    //  console.log(tempArray);
// 		    // console.log(tempArray[0]);

// 		    // switch content to selected film
// 		    film = tempArray[0];

// 		    //loads the html used in films
// 		    loadBody();

// 		    //inserts the specific content of this film
// 		    insertContent();

// 		    //runs the accordion
// 		    $( function() {
// 			    $( "#accordion" ).accordion({
// 			      collapsible: true
// 			    });
// 			  } );


// 		  });


