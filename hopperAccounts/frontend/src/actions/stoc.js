import axios from 'axios';

import { GET_STOC, DElETE_STOC } from './types';
import { useDispatch } from 'react-redux';

//GET STOC
export const getstoc = () => dispatch => {
    axios
      .get('/api/AddHistory/')
      .then(res =>{
          dispatch({
            type: GET_STOC,
            payload: res.data
            })
    })
    .catch(err => console.log(err));
};

//DElETE STOC
export const deletestoc = (id) => dispatch => {
    axios
      .delete('/api/AddHistory/${id}/')
      .then(res =>{
          dispatch({
               type: DElETE_STOC,
               payload: id
            })
    })
    .catch(err => console.log(err));
};