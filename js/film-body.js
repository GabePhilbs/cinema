
function callFilm(){

	var filmBody = '<div class="jumbotron" id="filmBanner">'
  filmBody += '<h1 id= "filmBannerTitle"> </h1>'
  filmBody += '<!-- <p>...</p> -->'
filmBody += '</div>'



filmBody += '<!-- collapsible accordion start  -->'
		

		filmBody += '<div id="accordion" class="accordionTitle" >'

		  filmBody += '<h3>Summary</h3>'

		  filmBody += '<div>'
		  filmBody += '<p id='summary'></p>'
		 filmBody += '</div>'

		 filmBody += '<h3 id='directorName'></h3>'

		  filmBody += '<div>'
		  filmBody += '<p id='aboutDirector'></p>'
		  filmBody += '</div>'

		  filmBody += '<h3>Cast</h3>'

		  filmBody += '<div>'
		    filmBody += '<p id = 'cast'></p>'
		  filmBody += '</div>'

		filmBody += '</div>'

filmBody += '<!-- collapsible accordion end  -->'

return filmBody;

}




if(film != 1){
	$('#homeSpot').html(callFilm());
	console.log(callHome)
}
