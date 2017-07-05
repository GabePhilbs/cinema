function calltimeline(){    
	


	var timeline = '<!-- beginning of the navbar block -->'


	timeline +='<!-- beginning of timeline -->'
		timeline +='<div id="timeline" class="timeline-container">'
		       timeline +=' <div class="timeline-wrapper">'
		       timeline +="<h2 class='timeline-time'>1930's</h2>"

		             timeline +='<dl class="timeline-series">'

		                        timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">I Was Born, But...</a></dt>'
		                        timeline +='<dd class="timeline-event-content" id="event01EX">'
		                               timeline +=' <p>Content about the event goes here.</p>'
		                       timeline +=' </dd>'

		                        

		                timeline +='</dl>'
		        timeline +='</div>'
		        timeline +='<div class="timeline-wrapper">'
		                timeline +="<h2 class='timeline-time'>1940's</h2>"

		                timeline +='<dl class="timeline-series">'

		                        timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Nora Inu</a></dt>'
		                        timeline +='<dd class="timeline-event-content" id="event03EX">'
		                                timeline +='<p>Content about the event goes here.</p>'
		                       timeline +=' </dd>'

		                timeline +='</dl>'
		        timeline +='</div>'
		        timeline +='<div class="timeline-wrapper">'
		                timeline +="<h2 class='timeline-time'>1950's</h2>"

		                timeline +='<dl class="timeline-series">'

		                        timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Gojira</a></dt>'
		                        timeline +='<dd class="timeline-event-content" id="event03EX">'
		                                timeline +='<p>Content about the event goes here.</p>'
		                        timeline +='</dd>'

		                timeline +='</dl>'
		        timeline +='</div>'
		        timeline +='<div class="timeline-wrapper">'
		                timeline +="<h2 class='timeline-time'>1960's</h2>"

		                timeline +='<dl class="timeline-series">'

		                        timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Tokyo Drifter</a></dt>'
		                        timeline +='<dd class="timeline-event-content" id="event03EX">'
		                                timeline +='<p>Content about the event goes here.</p>'
		                        timeline +='</dd>'

		                timeline +='</dl>'
		        timeline +='</div>'
		        timeline +='<div class="timeline-wrapper">'
		                timeline +="<h2 class='timeline-time'>1970's</h2>"

		                timeline +='<dl class="timeline-series">'

		                        timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">House</a></dt>'
		                        timeline +='<dd class="timeline-event-content" id="event03EX">'
		                                timeline +='<p>Content about the event goes here.</p>'
		                        timeline +='</dd>'

		                timeline +='</dl>'
		        timeline +='</div>'
		        timeline +='<div class="timeline-wrapper">'
		                timeline +="<h2 class='timeline-time'>1980's</h2>"

		                timeline +='<dl class="timeline-series">'

		                        timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Tampopo Juzo Itami</a></dt>'
		                        timeline +='<dd class="timeline-event-content" id="event03EX">'
		                                timeline +='<p>Content about the event goes here.</p>'
		                        timeline +='</dd>'

		                timeline +='</dl>'
		        timeline +='</div>'
		        timeline +='<div class="timeline-wrapper">'
		               timeline +="<h2 class='timeline-time'>1990's</h2>"

		                timeline +='<dl class="timeline-series">'

		                        timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Rainy Dog</a></dt>'
		                       timeline +=' <dd class="timeline-event-content" id="event03EX">'
		                               timeline +=' <p>Content about the event goes here.</p>'
		                       timeline +=' </dd>'

		                timeline +='</dl>'
		        timeline +='</div>'
		        timeline +='<div class="timeline-wrapper">'
		                timeline +="<h2 class='timeline-time'>2000's</h2>"

		                timeline +='<dl class="timeline-series">'

		                        timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = "smoothScroll timelineLink">Spirited Away</a></dt>'
		                        timeline +='<dd class="timeline-event-content" id="event03EX">'
		                                timeline +='<p>Content about the event goes here.</p>'
		                        timeline +='</dd>'

		                timeline +='</dl>'
		        timeline +='</div>'
		        timeline +='<div class="timeline-wrapper">'
		                timeline +="<h2 class='timeline-time'>2010's</h2>"

		                timeline +='<dl class="timeline-series">'

		                        timeline +='<dt class="timeline-event" id="event03"><a href="#pageTop" class = " smoothScroll timelineLink">Outrage</a></dt>'
		                        timeline +='<dd class="timeline-event-content" id="event03EX">'
		                                timeline +='<p>Content about the event goes here.</p>'
		                        timeline +='</dd>'

		                timeline +='</dl>'
		        timeline +='</div>'
		    timeline +='<br class="clear">'
		timeline +='</div>'






 return timeline;}

 $('div.timelineSpot').html(calltimeline());

// function for the timeline links
 
 	//just creating a variable for this function to work with
 	

 	//replace this with .get when the array becomes html
 	
$('.timelineLink').click(function(){
		    filmTitle =($(this).text());

		    //test if this thing is working so far
		    console.log(filmTitle);

		    //grep gives an array, so I need to obtain the first element of it

		    var tempArray = $.grep( films, function(rightFilm) {
  				return rightFilm.name == filmTitle;
			});
		    //see if the right film is being retrieved
		    // console.log(tempArray);
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
		 



