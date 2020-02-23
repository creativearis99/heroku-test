import express from 'express';
import stam from './stam';

const route = express.Router();

// route.use('auth', auth);
route.use('/api', [
    stam,
]);

export default route;
