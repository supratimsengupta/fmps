var _mongoDb = '../node_modules/mongodb';
var _mongoose = '../node_modules/mongoose';

var mongoDb = require(_mongoDb);
var db = require(_mongoDb).Db;
var connection = require(_mongoDb).Connection;
var server = require(_mongoDb).Server;
var host = process.env['MONGO_NODE_DRIVER_HOST']!=null?process.env['MONGO_NODE_DRIVER_HOST']:'localhost';
var port = process.env['MONGO_NODE_DRIVER_PORT']!=null?process.env['MONGO_NODE_DRIVER_PORT']:connection.DEFAULT_PORT;



var mongoose = require(_mongoose);
mongooseDb = mongoose.connect('mongodb://'+host+'/test');
//console.log(mongoose);
// mongoose.load('./models/');
User = mongoose.get('User',mongooseDb);
User.find({}).each(function(user){
	console.log(user);
});
//var user = new User({name: 'John', email:'john@helloworld.com',mobile:'9876543210'});
// user.save();