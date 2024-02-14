var Artist = require('../models/artist');
var Album = require('../models/album');

exports.getArtistList = async function(req, res){
	let artistList = await Artist.find({})
		.sort([['artist_name', 'ascending']])
		.exec();
	res.json(artistList);
};

exports.getArtistDetail = async function(req, res, next){
	let returnedArtist = await Artist.findById(req.params.id)
		.exec();
	let returnedAlbums = await Album.find( {artist: req.params.id} )
		.sort([['title','ascending']])
		.exec();
	res.json({artist_biography: returnedArtist.artist_biography, albums: returnedAlbums});
};

//Find an artist and then edit a characteristic of the artist
exports.editArtist = async function(req, res, next){
	let returnedArtist = await Artist.findById(req.params.id)
		.exec();
		
	returnedArtist.artist_biography = req.body.artistBiography;
	returnedArtist.save();
	console.log(returnedArtist);
}

//GET the form that allows new artists to be created
exports.createArtistGet = function(req, res, next){
	res.render('artist_create', { title: 'Create Artist' });
};

//POST the data needed to create a new artist entry in the database
/*exports.createArtistPost = function(req, res, next){
	req.checkBody('artist_name', 'You must enter a name for the artist').notEmpty();
	check(req.body.artist_name).notEmpty();
	
	req.sanitize('artist_name').escape();
	req.sanitize('artist_biography').escape();
	req.sanitize('artist_name').trim();
	req.sanitize('artist_biography').trim();
	
	var errors = req.validationResult(req);
	
	var artist = new Artist({
		artist_name: req.body.artist_name,
		artist_biography: req.body.artist_biography
	});
	
	console.log('New artist added: ' + artist);
	
	if (errors){
		res.render('artist_form', { title:'Create artist', artist_name: artist_name, errors: errors});
		return;
	}
	else{
		artist.save(function (err){
			if (err) { return next(err);}
			res.redirect('/artist');
		})
	}
};*/

exports.createArtistPost = function(req, res, next){

	console.log('Req:' + req.body.artistBiography);

	var artist = new Artist({
		artist_name: req.body.artistName,
		artist_biography: req.body.artistBiography
	})

	console.log('New artist added: ' + artist.artist_name);

	artist.save(function(err){
		if (err) return console.error(err);
	})
};

//GET the form that allows an artist to be deleted from the database
exports.deleteArtistGet = function(req, res, next){
	Artist.findById(req.params.id, function(err, result){
		if(err) { return next(err) };
		res.render('artist_delete', { artist: result });
	});
};

//POST the form that allows an artist to be deleted from the database
exports.deleteArtistPost = function(req, res, next){
	Artist.findByIdAndRemove(req.params.id, function(err, result){
		if(err) { return next(err) };
	});
};