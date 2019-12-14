const express = require('express');
const people = require('./people');
const app = express();

app.disable('x-powered-by');
app.disable('etag');

app.get('/people', (_req, res) => {
	people.allPeople().then(people => {
		res.json(people);
	});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	people.seed();
	console.log(`Server is listening on :${port}`);
});

