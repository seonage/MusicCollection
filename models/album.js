var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
	title: {type: String, required: true},
	artist: {type: Schema.ObjectId, ref: 'Artist', required: true},
	songs: [{type: String}]
});

AlbumSchema
  .virtual('url')
  .get(function (){
	 return '/album/' + this._id; 
  });

module.exports = mongoose.model('Album', AlbumSchema);