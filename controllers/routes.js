var AM = require('../modals/comment');

module.exports = function(app) {

	app.get('/', function(req, res){

		// Render views/home.html
		res.render('home');
	});


	app.get('/comments', function(req, res) {
		AM.getAllComments( function(e, cmts){
			res.render('comments', { cmmts : cmts });
		})
	});


	
// creating new accounts //
	
    app.post('/comment', function(req, res){
		AM.addNewComment({
			name   : req.body['yourName'],
			message 	: req.body['message'],
		}, function(e){

			AM.getAllComments( function(e, cmts){
			if (e){
				console.log(e);
				res.render('comments', { cmmts : cmts });
			}	else{
				res.render('comments', { cmmts : cmts });
			}
		   })
			
		});
	});


}