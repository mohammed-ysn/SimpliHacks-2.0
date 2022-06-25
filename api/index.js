import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Hello from the server!'));

// /oceandata/{latitude},{longitude},{depth in metres}
app.get('/oceandata/:latlngdpth', async (req, res) => {
    const latlngdpth = req.params.latlngdpth.split(',');

    const url = new URL('https://ocean.amentum.io/rtofs');
    url.searchParams.append('latitude', latlngdpth[0]);
    url.searchParams.append('longitude', latlngdpth[1]);
    url.searchParams.append('depth', latlngdpth[2]);

    const response = await fetch(url.href, {
        headers: {
            'API-Key': 'sTB9wQkdj2Jvhpt7dTD8tyOOW6Y4LOoz'
        }
    });
    const data = await response.json();
    res.json(data);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));