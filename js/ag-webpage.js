
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
	// console.log(film.name);
	// console.log(film.img);
	




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




//FORM STUFF


//insert forms in DOM HAVING TROUBLE WITH CHROME AUTHORIZATION

// $.ajax({
//     url: "forms.html",
//     success: function (data) { $('#formSpot').append(data); },
//     dataType: 'html'
// });

// //populate directors options

// function popDirSelect(){
// 	var dirOptions = '';

// 	for(var i = 0 ; i< directors.length; i++){

// 		dirOptions += "<option value=" + directors[i].name + ">" + director[i].name + "</option>"

// 		$('#directorSelect').html(dirOptions);	
// 	}
		
// }				



//getting from botton of the page

// a function that feeds a list of directors in the select forms
function loadDirectorsSelect(){
			var dirList ='';
			// console.log(dirList);
			for(var i = 0; i < directors.length; i++){
				dirList += "<option value='" + i + "'>" + directors[i].name + "</option>";

			}
			$('.directorSelectList').append(dirList);
			// console.log(dirList);
		};

function loadfilmSelect(){
			var filmList ='';
			// console.log(dirList);
			for(var i = 0; i < films.length; i++){
				filmList += "<option value='" + i + "'>" + films[i].name + "</option>";

			}
			$('.filmSelectList').append(filmList);
			// console.log(filmList);
		};



function loadFilmForm(){

	
	$('#formSpot').append($('#newFilmCont'));
	$("#newFilmCont").css("display", "none");

}

$.get("http://localhost:8080/directors",
		function(data)
		{ 
		 	 var directors = data;
		// console.log(directors);
		

		loadDirectorsSelect();
}
);

function loadDeleteLists(){
$.get("http://localhost:8080/directors",
		function(data)
		{ 
		 	 var directors = data;
		// console.log(directors);
		

		loadDirectorsSelect();
}
);

$.get("http://localhost:8080/films",
		function(data)
		{ 
		 	 var films = data;
			// console.log(films);
		

		loadfilmSelect();
}
);

};

loadDeleteLists();

function getNewFilm(){

	var filmFromForm ={
	name: $('filmName') ,
	summary: $('summaryField'),
	cast: $(''),
	director: directors[$('')],
	img: $(''),
	decade:$('')
	} 

};




$('addFilmButtton').click(getNewFilm());








