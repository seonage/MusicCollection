var Album = require('../models/album');

//GET the form that allows new albums to be created
exports.createAlbumGet = function(req, res, next){
	res.render('album_create', { title: 'Create album' });
};