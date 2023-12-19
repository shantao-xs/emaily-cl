
import axios from 'axios';
import { FETCH_USER } from './types';





export const fetchUser = () => async dispatch =>{
    const res = await axios.get('/api/current_user');

    dispatch({
        type:FETCH_USER,
        payload:res.data 
        });
};


export const handleToken = (token) => async dispatch =>{
    const res= await axios.post('/api/stripe',token); 
    dispatch({
        type:FETCH_USER, 
        payload:res.data 
        });

}




/**docs
 * payload: action携带的数据，可以是打包res.data，也可以是限定的某些键值对如payload:{id:productId, name:productName}
 * type：action的类型。自定义，比如这里定义的FETCH_USER
 * 
 * 异步处理：
 * -后端vsDB：promise，async等
 * -前端vs后端：axios，fetch等，常用来发起异步的http requset
 */


