
var crypto 		= require('crypto');
var MongoDB 	= require('mongodb').Db;
var mongodb     = require('mongodb');
var Server 		= require('mongodb').Server;
var moment 		= require('moment');

var dbPort 		= 47438;
var dbHost 		= 'mongodb://chinu:chinu@ds047438.mongolab.com';
var dbName 		= 'comments';

/* establish the database connection 

// Connect to the MongoLab database.
var connection = new Mongo( "ds047438.mongolab.com:47438" );



// Connect to the test database.
var db = connection.getDB( "comments" );

// Authorize this connection.
db.auth( "chinu", "chinu" );

*/

var uri = 'mongodb://chinu:chinu@ds047438.mongolab.com:47438/comments';

mongodb.MongoClient.connect(uri, function(err, db) {

	db.open(function(e, d){
	if (e) {
		console.log(e);
	}	else{
		console.log('connected to database :: ' + dbName);
	}
});

var comments = db.collection('comments');


/* record insertion, update & deletion methods */

exports.addNewComment = function(newData, callback)
{
	
// append date stamp when record was created //
newData.date = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(newData);
comments.insert(newData, {safe: true}, callback);
}


exports.getAllComments = function(callback)
{
	comments.find().toArray(
		function(e, res) {
		if (e) callback(e)
		else callback(null, res)
	});
};
});