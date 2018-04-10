var express = require('express');
var router = express.Router();

var usersmodel = require('../model/usersmodel');

router.get('/', function(req, res, next){
	res.render('login');
});

router.get('/addlist', function(req, res, next){
	usersmodel.listMessage(function(error,result){
		if (error) {
			res.render('index', {error:error});
		}		
		else{
			res.render('index', {data:result});
		}
	})
});

router.post('/addlistdata', function(req, res, next){
	var inputfielddata ={
		msg : req.body.msg,
		sts : '0'
	}
	usersmodel.addMessage(inputfielddata, function(error, result){
		if (error) {
			var msg = "wrong input"
			res.redirect('/addlist?error'+msg);
		}
		else{
			res.redirect('/addlist');
		}
	});
});

router.get('/delete', function(req, res, next){
	var mid = req.query.deleteid;
	var sts = '0'
	usersmodel.deleteMessage(mid,function(error, result){
		res.redirect('/addlist')
	});
});

router.get('/update', function(req, res, next){
	mid = req.query.updateid;
	usersmodel.getElementById(mid, function(error, result){
		if (error) {
			res.render('messageupdate', {error:error});
		}
		else{
			res.render('messageupdate', {data:result});
		}
	});
});

router.post('/messageupdatedata', function(req, res, next){
	var inputfielddata1 ={
		mid : req.body.mid,
		msg : req.body.msg,
	}
	usersmodel.updateMessage(inputfielddata1, function(error, result){
		if (error) {
			res.redirect('/update?updateid'+req.body.mid);
		}
		else{
			res.redirect('/addlist');
		}
	});
});

module.exports = router;