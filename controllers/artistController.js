var Artist = require('../models/artist');

//Find all the artists in the database and then displays them in a list on a page
exports.getArtistList = function(req, res, next){
	Artist.find()
	  .sort([['artist_name', 'ascending']])
	  .exec(function (err, list_artists){
		 if (err) { return next(err)};
		 res.render('artist_list', { title: 'Artist List', artists_list: list_artists});
	  });
};

//Find the details of an artist and displays the information on an page
exports.getArtistDetail = function(req, res, next){
	Artist.findById(req.params.id, function (err, result){
		if (err) { return next(err) };
		res.render('artist_detail', { title: result.artist_name, artist: result });
	});
};

//GET the form that allows new artists to be created
exports.createArtistGet = function(req, res, next){
	res.render('artist_create', { title: 'Create Artist' });
};

//POST the data needed to create a new artist entry in the database
exports.createArtistPost = function(req, res, next){
	req.checkBody('artist_name', 'You must enter a name for the artist').notEmpty();
	
	req.sanitize('artist_name').escape();
	req.sanitize('artist_biography').escape();
	req.sanitize('artist_name').trim();
	req.sanitize('artist_biography').trim();
	
	var errors = req.validationErrors();
	
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
		res.redirect('/artist')
	});
};