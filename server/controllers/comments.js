import comment from '../models/comments.js'
import mongoose from 'mongoose'

export const postComment = async(req, res) => {
    const commentData = req.body;
    const postcomment = new comment(commentData);
    try {
        await postcomment.save();
        res.status(200).json('Posted the comment')
        // console.log('Done')
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllComment = async(req, res) => {
    try {    
        const commentList = await comment.find(); 
        res.status(200).send(commentList)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const deleteComment = async(req, res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Channel Unavailable...')
    }
    try {
        await comment.findByIdAndDelete(_id);
        res.status(200).json({message: 'Comments Comment'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const editComment = async(req, res) => {
    const {id: _id} = req.params;
    const {commentBody} = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Comments Unavailable...')
    }
    try {
        const updateComment = await comment.findByIdAndUpdate(
            _id,
            {
                $set: {'commentBody': commentBody}
            }
        )
        res.status(200).json(updateComment)
    } catch (error) {
        res.status(400).json(error)
    }
}