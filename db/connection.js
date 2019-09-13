const mongoose = require('mongoose')

mongoose.Promise = Promise;

if (process.env.NODE_ENV === "production") {
	mongoURI = process.env.RB_URL;
} else {
	monguURI = 'mongodb://localhost/Marvel';
}
mongoose.connect(mongoURI, {
		useNewUrlParser: true
	})
	.then((conn) => {
		console.log(`Connected to mongodb on ${conn.connections[0].name} db`)
	})
	.catch(err => {
		console.error(err)
});

module.exports = mongoose