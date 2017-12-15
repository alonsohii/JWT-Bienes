var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'marioalonso',
  database : 'freelancer',
   multipleStatements: true
});

connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected ... "  );    
	} else {
		 if (err) throw err;
	    console.log("Error connecting database ... "+ err);    
	}
});


module.exports = connection;