
function loadBody(){
	if(film == 1){
		// $('#bodySpot').html(callHome());
		//console.log(callHome())
		$('#homeSpot').show();
		$('#filmSpot').hide();

		//hide forms
		$('#deleteCont').hide();
		$('#addFilmCont').hide();
		$('#newDirectorCont').hide();

	}else {
		// $('#bodySpot').html(callFilm());
		// //console.log(callFilm())
		$('#filmSpot').show();
		$('#homeSpot').hide();
	}

}

loadBody();





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
				dirList += "<option value=" +" ' "+ directors[i].name + " ' "+ ">" + directors[i].name + "</option>";

			}
			$('.directorSelectList').html(dirList);
			// console.log(dirList);
		};

function loadfilmSelect(){
			var filmList ='';
			// console.log(dirList);
			for(var i = 0; i < films.length; i++){
				filmList += "<option value=" + i + ">" + films[i].name + "</option>";

			}
			$('.filmSelectList').html(filmList);
			// console.log(filmList);
		};



function loadFilmForm(){

	
	$('#formSpot').append($('#newFilmCont'));
	$("#newFilmCont").css("display", "none");

}

$.get(serverUrl+"directors",
		function(data)
		{ 
		 	 directors = data;
		// console.log(directors);
		

		loadDirectorsSelect();
}
);

function loadDeleteLists(){
	$.get(serverUrl+"directors",
			function(data)
			{ 
			 	directors = data;
			// console.log(directors);
			

			loadDirectorsSelect();
	}
	);

	$.get(serverUrl+"films",
			function(data)
			{ 
			 	 var films = data;
				// console.log(films);
			

			loadfilmSelect();
	}
	);

};

loadDeleteLists();

// function getNewFilm(){

// 	var filmFromForm ={
// 	name: $('filmName') ,
// 	summary: $('summaryField'),
// 	cast: $(''),
// 	director: directors[$('')],
// 	img: $(''),
// 	decade:$('')
// 	} 

// 	console.log(filmFromForm);
// };




$('#addFilmButton').click(function(){
	// var bla = $('#filmName').val();
	console.log("button clicked");
	
		var filmFromForm ={
			name: $('#filmName').val() ,
			summary: $('#summaryField').val() ,
			cast: $('#castField').val(),
			director: $('#directorSelect').val() ,
			img: $('#imgLink').val() ,
			decade: $('#decadeSelect').val() 
			} 

		// console.log($('#decadeSelect').val());
		// console.log(filmFromForm);

			$('#filmName').val('');
			$('#summaryField').val('');
			$('#castField').val('');
			$('#directorSelect').val('');
			$('#imgLink').val('');
			$('#decadeSelect').val(''); 

			console.log(filmFromForm);


			//.POST  DIRECTOR 	HERE
		
	}
);

$('#addDirectorButton').click(function(){
	// var bla = $('#filmName').val();
	console.log("button clicked");
	
		var directorFromForm ={
			name: $('#directorName').val() ,
			about: $('#about').val() ,
			} 

			$('#directorName').val('') ,
			$('#about').val('') ,
		console.log(directorFromForm);

	//.POST  DIRECTOR 	HERE



	//CLEAR FORM	
	$('#formSpot').html("FORM SENT");		
	}
);




		//DROPDOWN BUTTONS

		//MUST LOAD FORMS INTO VARIABLES


		// var newDirectorCont = $('#newDirectorCont');



		// var  addFilmCont = $('#addFilmCont');

		// var deleteCont = $('#deleteCont');




$('#addDirectorDrop').click(function(){
	// var bla = $('#filmName').val();
	// console.log("addDirectorDrop clicked");
	// console.log($('#newDirectorCont'));

	// $('#formSpot').html(newDirectorCont);
	$('#newDirectorCont').show();
	$('#deleteCont').hide();
	$('#addFilmCont').hide();

		
	});



$('#addFilmDrop').click(function(){
	// var bla = $('#filmName').val();
	// console.log("addFilmDrop clicked");
	// console.log($('#addFilmCont'));

	// $('#formSpot').html(addFilmCont);
	$('#addFilmCont').show();
	$('#newDirectorCont').hide();
	$('#deleteCont').hide();


		
	});


$('#deleteDrop').click(function(){
	// var bla = $('#filmName').val();
	// console.log("deleteDrop clicked");
	// console.log($('#deleteCont'));

	// $('#formSpot').html(deleteCont);
	$('#deleteCont').show();
	$('#addFilmCont').hide();
	$('#newDirectorCont').hide();
	



		
	});





