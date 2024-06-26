import * as api from '../api'

export const fetchAllChannel = () =>async(dispatch)=>{
    try {
        const {data} = await api.fetchAllChannel();
        dispatch({type: 'FETCH_CHANNELS', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const UpdateChannelData = (id, updateData) => async(dispatch) => {
    try {
        const {data} = await api.UpdateChannelData(id, updateData);
        dispatch({type: 'UPDATE_DATA', payload: data})
    } catch (error) {
        console.log(error)
    }
}