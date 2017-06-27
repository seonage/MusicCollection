var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = Schema({
	artist_name: {type: String, required: true},
	artist_biography: {type: String}
});

ArtistSchema
  .virtual('url')
  .get(function (){
	  return '/artist/' + this._id;
  });

module.exports = mongoose.model('Artist', ArtistSchema);