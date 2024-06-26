import express from 'express'
import {uploadVideo, getAllvideos} from '../controllers/video.js'
import {likeController} from '../controllers/like.js'
import {viewController} from '../controllers/views.js'
import {likeVideoController, getAlllikeVideoController, deletelikeVideoController} from '../controllers/likeVideo.js'
import {watchLaterController, getAllwatchLaterController, deletewatchLaterController} from '../controllers/watchLater.js'
import {historyController, getAllhistoryController, clearhistoryController} from '../controllers/history.js'
import upload from '../Helpers/fileHelpers.js'
import auth from '../middleware/auth.js'

const routes = express.Router();

routes.post('/uploadVideo',  auth, upload.single('file'), uploadVideo)
routes.get('/getvideos', getAllvideos)
routes.patch('/like/:id', auth, likeController)
routes.patch('/view/:id', viewController)
routes.post('/likeVideo', auth, likeVideoController)
routes.get('/getAlllikeVideo', getAlllikeVideoController)
routes.delete('/deletelikeVideo/:videoId/:Viewer', auth, deletelikeVideoController)
routes.post('/watchLater', auth, watchLaterController)
routes.get('/getAllwatchLater', getAllwatchLaterController)
routes.delete('/deleteWatchlater/:videoId/:Viewer', auth, deletewatchLaterController)
routes.post('/history', auth, historyController)
routes.get('/getAllhistory', getAllhistoryController)
routes.delete('/clearhistory/:userId', auth, clearhistoryController)

export default routes;