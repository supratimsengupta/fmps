var _mongoose = '../node_modules/mongoose';
var mongoose = require(_mongoose);
console.log(mongoose);


mongoose.Model.create('User',{
	collection:"User",					// optional
	types:{								// data structure
		firstName: String,
		lastName: String,
		email: String,
		mobile: String
	},			
	indexes:['mobile', 'email'],		// indexes
	static:{},							// static methods to the Model
	methods:{},							// instance methods to the Model
	setters:{							// setters
		firstName: function(first){
			return first.toUpperCase();
		},
		lastName: function(last){
			return last.toUpperCase();
		},
		email: function(id){
			return id;
		},
		mobile: function(val){
			return val;
		}
	},			
	getters:{							// getters
		firstName: function(first){
			return first.toUpperCase();
		},
		lastName: function(last){
			return last.toUpperCase();
		},
		email: function(id){
			return id;
		},
		mobile: function(val){
			return val;
		}		
	}
});