var Album = require('../models/album');
var Artist = require('../models/artist');

//Find all the artists in the database and then displays them in a list on a page
exports.getAlbumList = function(req, res, next){
	Album.find()
	  .sort([['title', 'ascending']])
	  .exec(function (err, list_albums){
		 if (err) { return next(err)};
		 res.render('album_list', { title: 'Album List', albums_list: list_albums});
	  });
};

//Find the details of an album and displays the information on a page
/*exports.getAlbumDetail = function(req, res, next){
	Album.findById(req.params.id, function (err, result){
		if (err) { return next(err) };
		res.render('album_detail', {title: result.title, album: result});
	});
};*/

exports.getAlbumDetail = function(req, res, next){
	Album
	  .findById(req.params.id)
	  .populate('artist')
	  .exec(function (err, album){
		 if(err){ return next(err) };
		 res.json(album);
	  });
};

//GET the form that allows for new albums to be created. Also gets a list of artists already in the database
//and uses this list to fill up the select menu for Artist in artist_list form
exports.createAlbumGet = function(req, res, next){
	Artist.find()
	  .sort([['artist_name', 'ascending']])
	  .exec(function(err, artist_list){
		  if (err){ return next(err) };
		  res.render('album_create', { title: 'Create album', artist_list: artist_list } );
	  });
};

//POST the data needed to create a new album in the database
exports.createAlbumPost = function(req, res, next){
	req.checkBody('artist', 'An artist must be selected').notEmpty();
	req.checkBody('album_title', 'An album title must be provided').notEmpty();
	
	req.sanitize('artist').escape();
	req.sanitize('album_title').escape();
	
	var album = new Album({
		artist: req.body.artist,
		title: req.body.album_title
	});
	console.log(album);
	
	var errors = req.validationErrors();
	if (errors){
		console.log(errors);
		Artist.find()
		  .sort([['artist_name', 'ascending']])
		  .exec(function(err, artist_list){
			  if (err){ return next(err) };
			  res.render('album_create', { title: 'Create album', artist_list: artist_list } );
		  });
	}
	else {
		album.save(function (err){
			if (err){ return next(err) };
			console.log("New album added: " + album);
			res.redirect('/album');
		})
	};
};

//GET the form that allows for an album to be deleted
exports.getAlbumDelete = function(req, res, next){
	Album.findById(req.params.id, function(err, result){
		res.render('album_delete', { title: "Delete?", album: result});
	});
};

//POST the form that deletes an album
exports.postAlbumDelete = function(req, res, next){
	Album.findByIdAndRemove(req.params.id, function(err, result){
		if (err){ next(err) };
		res.redirect('/album');
	});
};