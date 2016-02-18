var express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    cors = require('cors'),
    agents = require('./server/travelagent-service'),
    //brokers = require('./server/broker-service'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.use('/', express.static(__dirname + '/www'));

app.get('/agents', agents.findAll);
app.get('/agents/favorites', agents.getFavorites);
app.get('/agents/:id', agents.findById);
app.post('/agents/likes', agents.like);
app.post('/agents/favorites', agents.favorite);
app.delete('/agents/favorites/:id', agents.unfavorite);

//app.get('/brokers', brokers.findAll);
//app.get('/brokers/:id', brokers.findById);

app.listen(app.get('port'), function () {
    console.log('Realty server listening on port ' + app.get('port'));
});
