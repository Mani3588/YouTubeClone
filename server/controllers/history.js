import history from '../models/history.js'
import mongoose from 'mongoose'

export const historyController = async(req, res) => {
    const historyData = req.body;
    // console.log(historyData)
    const addTohistory = new history(historyData);


    try {
        await addTohistory.save();
        res.status(200).json('Added to watchLater')
        console.log('Done')
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllhistoryController = async(req, res) => {
    try {    
        const files = await history.find(); 
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const clearhistoryController = async(req, res) => {
    const {userId: userId} = req.params;
    try {
        await history.deleteMany({
            Viewer: userId
        })
        res.status(200).json({message: 'Removed from your Watch Laters'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}