import axios from 'axios'
import { FETCH_DATA_FAIL, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST,LOG_IN,LOG_OUT,DATA_ADDED,DATA_UPDATED,DATA_DELETED } from './types';
export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const dataDeleted=()=>{
  return {
    type:DATA_DELETED,
  }
}

export const dataAdded=()=>{
  return {
    type:DATA_ADDED,
  }
}

export const dataUpdated=()=>{
  return {
    type:DATA_UPDATED,
  }
}
export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};


export const fetchDataFail = (error) => {
  return {
    type: FETCH_DATA_FAIL,
    payload: error,
  };
};

export const Login = () => {
  return {
    type: LOG_IN,
  };
};

export const Logout = () => {
  return {
    type: LOG_OUT,
  };
};

//load users
export const fetchData = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3005/data")
      .then((res) => {
        const data = res.data;
        console.log(data);
        dispatch(fetchDataSuccess(data));
      })
      .catch((err) => {
        console.log(err)
      });
  };
};

