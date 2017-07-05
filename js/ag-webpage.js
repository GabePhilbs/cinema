
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );


function insertContent(){
	$('#summary').html(film.summary);
	$('#directorName').html('About ' + film.director.name);
	$('#aboutDirector').html(film.director.about);
	$('#cast').html(film.cast);
	$('#filmBannerTitle').html(film.name);
	$('#filmBanner').css(
		{
			"background-image": 
			"url('"+film.img+"')"
		}
		);
	console.log(film.name);
	console.log(film.img);
	




}

if(film ==1){

} 

else {
	insertContent();
};


//test if the film is being selected
// console.log(film.summary);
// console.log( film.director.name);
// console.log(film.director.about);
// console.log(#summary);
