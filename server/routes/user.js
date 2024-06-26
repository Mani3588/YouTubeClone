import express from 'express'
import { login } from '../controllers/auth.js';
import { UpdateChannelData, getAllChannels } from '../controllers/channel.js';

const routes = express.Router();

routes.post('/login', login)
routes.patch('/update/:id', UpdateChannelData)
routes.get('/getAllChannels', getAllChannels)

export default routes;