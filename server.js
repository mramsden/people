const bodyParser = require('body-parser');
const express = require('express');
const people = require('./people');

const app = express();
const jsonParser = bodyParser.json();

app.disable('x-powered-by');
app.disable('etag');

app.get('/people', (_req, res) => {
	people.allPeople().then(people => {
		res.json(people);
	});
});

app.post('/seeds', jsonParser, (req, res) => {
	const { count } = req.body;
	if (count === undefined) {
		return res.status(400).send({ error: 'People seed requires a count parameter' });
	}
	people.seed(count);
	res.status(202).end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	people.seed();
	console.log(`Server is listening on :${port}`);
});

