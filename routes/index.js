var express = require('express');
var router = express.Router();

var artistController = require('../controllers/artistController');
var albumController = require('../controllers/albumController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//Display all the artists in the database
router.get('/artist', artistController.getArtistList)

//GET the form that allows for new artists to be added
router.get('/artist/create', artistController.createArtistGet);

//POST the request to add a new artist
router.post('/artist/create', artistController.createArtistPost);

//GET the form that allows for an artist to be deleted
//router.get('/artist/delete');

//GET the form that allows for new albums to be added
router.get('/album/create', albumController.createAlbumGet);

module.exports = router;
