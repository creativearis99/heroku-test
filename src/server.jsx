import path from 'path';
import express from 'express';
import morgan from 'morgan';
import render from './services/render';
import api from './api';
import App from './components/App';
import routes from './components/routes';

const app = express();

const assets = path.resolve(__dirname, 'assets');

app.use(express.static(assets));
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', assets);

app.use(api);
// app.use((req, res, next) => {
//     console.log('req.url', req.url); // eslint-disable-line no-console
//     console.log('req.session', req.session.id); // eslint-disable-line no-console
//     console.log('req.user', req.user); // eslint-disable-line no-console
//     if (req.isAuthenticated()) {
//         console.log('Authenticated'); // eslint-disable-line no-console
//     } else {
//         console.log('Authenticated not'); // eslint-disable-line no-console
//     }
//     return next();
// });
app.use(render(App, routes));

app.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${process.env.PORT || 3000}`); // eslint-disable-line no-console
    }
});
