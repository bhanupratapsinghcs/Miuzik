const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser")
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
var credentials = {
    clientId: '0adaf2a4ad6248869d5b1acf78494f58',
    clientSecret: 'fd21ab9eea2b445fbc9a6b7cd7ce8881',
    redirectUri: 'http://localhost:3000'
};

// route for refresh token on expires

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        clientId: '0adaf2a4ad6248869d5b1acf78494f58',
        clientSecret: 'fd21ab9eea2b445fbc9a6b7cd7ce8881',
        redirectUri: 'http://localhost:3000',
        refreshToken,
    });

    spotifyApi.refreshAccessToken()
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in
            })
        })
        .catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
})

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi(credentials);
    // console.log(code)
    // console.log("2")

    spotifyApi.authorizationCodeGrant(code)
        .then(data => {
            // console.log(data.body)
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in

            })
        })
        .catch((err) => {
            // console.log(code)
            // console.log("error")
            console.log(err)
            res.sendStatus(400)
        })
})

app.listen(3001)