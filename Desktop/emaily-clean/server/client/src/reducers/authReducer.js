import { FETCH_USER } from "../actions/types";

export default function(state=null,action){
    console.log(action); 
    switch(action.type){
        default:
            return state;
        case FETCH_USER: 
            return action.payload || false; 


    }
}