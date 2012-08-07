var mongoDb = '../node_modules/mongodb';

var _mongoDb = require(mongoDb);
var db = require(mongoDb).Db;
var connection = require(mongoDb).Connection;
var server = require(mongoDb).Server;
var host = process.env['MONGO_NODE_DRIVER_HOST']!=null?process.env['MONGO_NODE_DRIVER_HOST']:'localhost';
var port = process.env['MONGO_NODE_DRIVER_PORT']!=null?process.env['MONGO_NODE_DRIVER_PORT']:connection.DEFAULT_PORT;



function runQuery(db, myCollection, query, nextFn){
	db.open(function(err,db){
		db.collection(myCollection, function(err, collection){
			collection.find(query, function(err, cursor){
				cursor.toArray(function(err, cursor){
					console.log("Found: "+docs.length+" documents");
					var queryResults = [];
					for(var i=0;i<docs.length;i++){
						queryResults[queryReults.length] = docs[i];
					}
					db.close();
					nextFn(queryResults);
				});
			});
		});
	});
}

function search(personName, companyName, address, nextFn){
	var data = [], count = 3;
	var doneFn = function(results){
		data = data.concat(results);
		count--;
		if(count<=0){
			var uniqueResults = [];
			for(var i=0;i<data.length;i++){
				if(!uniqueResults[data[i]['_id']]){
					uniqueResults[uniqueResults.length] = data[i];
					uniqueResults[data[i]['_id']] = true;
				}
			}
			nextFn(uniqueResults);
		}
	};
	
	runQuery(new db('mydb',new Server(host, port, {})),'people',{'name': new RegExp('_'+personName,'i')}, doneFn);
	
	runQuery(new db('mydb', new Server(host, port, {})),'companies',{'name':new RegExp('_'+companyName,'i')}, doneFn);
	
	runQuery(new db('mydb', new Server(host, port, {})),'companies',{'address':new RegExp(address, 'i')}, doneFn);
}