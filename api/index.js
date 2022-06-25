import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Hello from the server!'));

app.get('/test', async (req, res) => {
    // Placeholder data
    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    res.json(data);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));