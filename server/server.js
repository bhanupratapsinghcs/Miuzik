const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();
var credentials = {
    clientId: '0adaf2a4ad6248869d5b1acf78494f58',
    clientSecret: 'fd21ab9eea2b445fbc9a6b7cd7ce8881',
    redirectUri: 'http://localhost:3000'
};

app.post('/login', (req, res) => {
    const spotifyApi = new SpotifyWebApi(credentials);
    const code = req.body.code;

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in

        })
    }).catch(() => {
        res.sendStatus(400)
    })
})