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



		//         timeline +='<div class="timeline-wrapper">'
		//                 timeline +="<h2 class='timeline-time time-forty'>1940's</h2>"

		//                 timeline +='<dl class="timeline-series">'

		//                         timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Nora Inu</a></dt>'
		//                         timeline +='<dd class="timeline-event-content" id="event03EX">'
		//                                 timeline +='<p>Content about the event goes here.</p>'
		//                        timeline +=' </dd>'

		//                 timeline +='</dl>'
		//         timeline +='</div>'
		//         timeline +='<div class="timeline-wrapper">'
		//                 timeline +="<h2 class='timeline-time time-fifty'>1950's</h2>"

		//                 timeline +='<dl class="timeline-series">'

		//                         timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Gojira</a></dt>'
		//                         timeline +='<dd class="timeline-event-content" id="event03EX">'
		//                                 timeline +='<p>Content about the event goes here.</p>'
		//                         timeline +='</dd>'

		//                 timeline +='</dl>'
		//         timeline +='</div>'
		//         timeline +='<div class="timeline-wrapper">'
		//                 timeline +="<h2 class='timeline-time time-sixty'>1960's</h2>"

		//                 timeline +='<dl class="timeline-series">'

		//                         timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Tokyo Drifter</a></dt>'
		//                         timeline +='<dd class="timeline-event-content" id="event03EX">'
		//                                 timeline +='<p>Content about the event goes here.</p>'
		//                         timeline +='</dd>'

		//                 timeline +='</dl>'
		//         timeline +='</div>'
		//         timeline +='<div class="timeline-wrapper">'
		//                 timeline +="<h2 class='timeline-time'>1970's</h2>"

		//                 timeline +='<dl class="timeline-series">'

		//                         timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">House</a></dt>'
		//                         timeline +='<dd class="timeline-event-content" id="event03EX">'
		//                                 timeline +='<p>Content about the event goes here.</p>'
		//                         timeline +='</dd>'

		//                 timeline +='</dl>'
		//         timeline +='</div>'
		//         timeline +='<div class="timeline-wrapper">'
		//                 timeline +="<h2 class='timeline-time'>1980's</h2>"

		//                 timeline +='<dl class="timeline-series">'

		//                         timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Tampopo Juzo Itami</a></dt>'
		//                         timeline +='<dd class="timeline-event-content" id="event03EX">'
		//                                 timeline +='<p>Content about the event goes here.</p>'
		//                         timeline +='</dd>'

		//                 timeline +='</dl>'
		//         timeline +='</div>'
		//         timeline +='<div class="timeline-wrapper">'
		//                timeline +="<h2 class='timeline-time'>1990's</h2>"

		//                 timeline +='<dl class="timeline-series">'

		//                         timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Rainy Dog</a></dt>'
		//                        timeline +=' <dd class="timeline-event-content" id="event03EX">'
		//                                timeline +=' <p>Content about the event goes here.</p>'
		//                        timeline +=' </dd>'

		//                 timeline +='</dl>'
		//         timeline +='</div>'
		//         timeline +='<div class="timeline-wrapper">'
		//                 timeline +="<h2 class='timeline-time'>2000's</h2>"

		//                 timeline +='<dl class="timeline-series">'

		//                         timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Spirited Away</a></dt>'
		//                         timeline +='<dd class="timeline-event-content" id="event03EX">'
		//                                 timeline +='<p>Content about the event goes here.</p>'
		//                         timeline +='</dd>'

		//                 timeline +='</dl>'
		//         timeline +='</div>'
		//         timeline +='<div class="timeline-wrapper">'
		//                 timeline +="<h2 class='timeline-time'>2010's</h2>"

		//                 timeline +='<dl class="timeline-series">'

		//                         timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = " smoothScroll timelineLink">Outrage</a></dt>'
		//                         timeline +='<dd class="timeline-event-content" id="event03EX">'
		//                                 timeline +='<p>Content about the event goes here.</p>'
		//                         timeline +='</dd>'

		//                 timeline +='</dl>'
		//         timeline +='</div>'
		// //     timeline +='<br class="clear">'
		// timeline +='</div>'





 return timeline;}

 $('div.timelineSpot').html(calltimeline());

// function for the timeline links
 
 	//just creating a variable for this function to work with
 	

 	//replace this with .get when the array becomes html



$.get("http://localhost:8080/films", function(data){
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


       // I moved the click function here, so it loads after ajax
       // otherwise the anchor would not load
       $('.timelineLink').click(function(){
			console.log('helllo');
		    filmTitle =($(this).text());

		    //test if this thing is working so far
		    console.log(filmTitle);

		    //test if the var films is loaded
		    console.log("FILMS:",films);

		    //grep gives an array, so I need to obtain the first element of it

		    var tempArray = $.grep( films, function(rightFilm) {
  				// testing if the array films loads here
  				//console.log(films);
  				return rightFilm.name == filmTitle;

			});
		    //see if the right film is being retrieved
		    //  console.log(tempArray);
		    // console.log(tempArray[0]);

		    // switch content to selected film
		    film = tempArray[0];

		    //loads the html used in films
		    loadBody();

		    //inserts the specific content of this film
		    insertContent();

		    //runs the accordion
		    $( function() {
			    $( "#accordion" ).accordion({
			      collapsible: true
			    });
			  } );


		  });

       runSmoothScroll();

});
			


 	// this works with the manually iputed anchors, but...
 	// does not work with the anchors dinamicsally generated by the loop
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


