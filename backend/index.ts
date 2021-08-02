import * as express from 'express';
import userRoutes from './routes/userRoutes';

const app: express.Express = express();

const port: number = 3100;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the home node');
});

userRoutes(app);

app.listen(port, () => {
    console.log("Listening on port " + port);
});
