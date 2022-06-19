import {GYM_LIST_FAIL,GYM_LIST_SUCCESS,GYM_LIST_REQUEST} from '../constants/gymConstants'
import axios from 'axios'

export const listGym = () => async(dispatch)=>{
    try{
        // dispatch({type:GYM_LIST_REQUEST})
        const {data} = await axios.get('/gym.json')

        dispatch({type:GYM_LIST_SUCCESS,payload:data.gymcentre})

    }catch(error){
        // dispatch({type:RESTAURANT_LIST_FAIL,payload:error})
            console.log("Error");
    }
}