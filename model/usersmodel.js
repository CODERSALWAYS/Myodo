var pool = require('../util/dbconnection');

var data = {
	addMessage: function(inputData, cb){
		var sql = "insert into message(message,sts) values('"+inputData.msg+"', "+inputData.sts+")";
		pool.getConnection(function(error, connection){
			if (error) {
				console.log("connection error");
			}
			else{
				connection.query(sql, function(error, result){
					if (error) {
						cb(error, null);
					}
					else{
						cb(null, result);
					}
				});
			}
			connection.release();
		});
	},


	listMessage: function(cb){
		var sql = "select * from message where sts="+0;
		pool.getConnection(function(error, connection){
			if (error) {
				console.log("connection error");
			}
			else{
				connection.query(sql, function(error, result){
					if (error) {
						cb(error, null);
					}
					else{
						cb(null, result);
					}
				});
			}
			connection.release();
			
		});
	},

	deleteMessage: function(mid, cb){
		var sql = "update message set sts ='-1' where mid="+mid;
		pool.getConnection(function(error, connection){
			if (error) {
				console.log("connection error");
			}
			else{
				connection.query(sql, function(error, result){
					if (error) {
						cb(error, null);
					}
					else{
						cb(null, result);
					}
				});
			}
			connection.release();
		});
	},
	
	getElementById:function(mid, cb){
		var sql = "select * from message where mid="+mid;
		pool.getConnection(function(error,connection){
			if (error) {
				console.log("connection error");
			}
			else{
				connection.query(sql, function(error, result){
					if (error) {
						cb(error, null);
					}	
					else{
						cb(null, result);
					}
				});
			}
			connection.release();
		});	
	},

	updateMessage:function(inputData, cb){
		var sql = "update message set message='"+inputData.msg+"' where mid="+mid;
		pool.getConnection(function(error, connection){
			if (error) {
				console.log("connection error");
			}
			else{
				connection.query(sql, function(error,result){
					if (error) {
						cb(error, null);
					}
					else{
						cb(null, result);
					}
				});
			}
			connection.release();
		}); 
		
	}


}
module.exports = data;