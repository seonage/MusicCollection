var express = require('express');
var router = express.Router();

var artistController = require('../controllers/artistController');
var albumController = require('../controllers/albumController');

router.get('/', function(req, res) {
	  res.render('index', {title: 'Welcome to MusicCollection'});
	});

/* ARTISTS ROUTES */

//Display all the artists in the database
router.get('/artist', artistController.getArtistList)

//GET the form that allows for new artists to be added
router.get('/artist/create', artistController.createArtistGet);

//POST the request to add a new artist
router.post('/artist/create', artistController.createArtistPost);

//GET the details of an artist
router.get('/artist/:id', artistController.getArtistDetail)

//GET the form that allows for an artist to be deleted
router.get('/artist/:id/delete', artistController.deleteArtistGet);

//POST the request to delete an artist from the database
router.post('/artist/:id/delete', artistController.deleteArtistPost);

//Find an artist and then edit the artist
router.post('/artist/:id/', artistController.editArtist);

/* ALBUM ROUTES */

//Displays all the albums in the database
router.get('/album', albumController.getAlbumList);

//GET the form that allows for new albums to be added
router.get('/album/create', albumController.createAlbumGet);

//POST the form that allows for new albums to be created
router.post('/album/create', albumController.createAlbumPost);

//GET the details of an album
router.get('/album/:id', albumController.getAlbumDetail);

//GET the form that allows for an album to be deleted
router.get('/album/:id/delete', albumController.getAlbumDelete);

//POST the form that deletes an album
router.post('/album/:id/delete', albumController.postAlbumDelete)

module.exports = router;
