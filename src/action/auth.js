import { LOGIN, REGISTER, URL, LOAD_USER, LOAD_ERROR, USER_DATA } from './types';
import * as axios from 'axios';
import {toast} from './toast';
import base64 from 'react-native-base64';
import {decode, encode} from 'base-64'
global.btoa = encode;

const config ={
    headers: { 'Authorization': authHeader }
};
const authHeader = 'Basic ' + base64.encode(`${'apikey'}:${'thefooods'}`);
const axiosObject = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': 'Basic ' + base64.encode(`${'apikey'}:${'thefooods'}`),
    }
});

export const login = (payload) => async dispatch => {
    try {
        // console.log('API clled')
        const response = await axios.post(`${URL}/delivery-login`, payload, config);
        console.log(response.data);
        dispatch(toast('success', 'Logged in successfully'));

     
        return {
            success: true, data: response.data
        }
    } catch (error) {
        // alert(error);
        console.log(error.response);
     if(error.response) {
         
        dispatch(toast('err', error.response.data.message));
         return {
             success: false, data: error.response.data.message
         }
     }
     else {
         
        dispatch(toast('err', 'Error in login'));
         return {
             success: false, data: 'Error in login'
         }
     }
    }
}

export const fetchCompanies = () => async dispatch => {
    try {
        console.log('API clled', `${URL}/listofcompany.php`)
        const res = await axios.get('http://food.breeur.in/api/listofcompany.php', {
        auth: {
          username: 'apikey',
          password: 'thefooods'
        }
      });
      console.log(res.data, 'res')

     
        return {
            success: true, data: res.data
        }
    } catch (error) {
        // alert(error);
        console.log(error.message);
     if(error.response) {
         
        dispatch(toast('err', error.response.data.message));
         return {
             success: false, data: error.response.data.message
         }
     }
     else {
         
        dispatch(toast('err', 'Error in login'));
         return {
             success: false, data: 'Error in login'
         }
     }
    }
}





export const loginUser = (payload) => async dispatch => {
    try {
        console.log('API clled', `${URL}/listofcompany.php`)
        const res = await axios.get('http://food.breeur.in/api/deliveryverify.php', payload,{
        auth: {
          username: 'apikey',
          password: 'thefooods'
        }
      });
      console.log(res.data, 'res')
        dispatch(toast('success', 'Logged in successfully'));
        // dispatch({
        //     type: LOAD_USER,
        //     payload: res
        // });
     
        return {
            success: true, data: res.data
        }
    } catch (error) {
        // alert(error);
        console.log(error.message);
     if(error.response) {
         
        dispatch(toast('err', error.response.data.message));
         return {
             success: false, data: error.response.data.message
         }
     }
     else {
         
        dispatch(toast('err', 'Error in login'));
         return {
             success: false, data: 'Error in login'
         }
     }
    }
}




export const generateOTP = (mobile) => async dispatch => {
    try {
        console.log('API clled', `http://food.breeur.in/api/deliverylogin.php/${mobile}`)
        const res = await axios.get(`http://food.breeur.in/api/deliverylogin.php/${mobile}`, {
        auth: {
          username: 'apikey',
          password: 'thefooods'
        }
      });
      console.log(res.data, 'otp generate')
        // dispatch(toast('success', ''));
        // dispatch({
        //     type: LOAD_USER,
        //     payload: res
        // });
     
        if(res.data.success) {
            dispatch(toast('success', res.data.message));
            return res.data
        } else {
            dispatch(toast('err', res.data.message));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error.message);
     if(error.response) {
         
        dispatch(toast('err', error.response.data.message));
         return {
             success: false, data: error.response.data.message
         }
     }
     else {
         
        dispatch(toast('err', 'Error in login'));
         return {
             success: false, data: 'Error in login'
         }
     }
    }
}

export const getVendors = (payload) => async dispatch => {

try {
    console.log('API clled', `http://food.breeur.in/api/listofcompanyvendor.php`)
    const res = await axios.post('http://food.breeur.in/api/listofcompanyvendor.php', payload);
//   console.log(res.data, 'vendors')

 
    return {
        success: true, data: res.data
    }
} catch (error) {
    // alert(error);
    console.log(error.message);
 if(error.response) {
     
    dispatch(toast('err', error.response.data.message));
     return {
         success: false, data: error.response.data.message
     }
 }
 else {
     
    dispatch(toast('err', 'Error in login'));
     return {
         success: false, data: 'Error in login'
     }
 }
}
}

export const storeCafeDensity = (payload) => async dispatch => {
    try {
        console.log('API clled', `http://food.breeur.in/api/cafedensity.php`)
        const res = await axios.post('http://food.breeur.in/api/cafedensity.php', payload);
    //   console.log(res.data, 'vendors')
    dispatch(toast('success', res.data.message));
     
        return {
            success: true, data: res.data
        }
    } catch (error) {
        // alert(error);
        console.log(error.message);
     if(error.response) {
         
        dispatch(toast('err', error.response.data.message));
         return {
             success: false, data: error.response.data.message
         }
     }
     else {
         
        dispatch(toast('err', 'Error in login'));
         return {
             success: false, data: 'Error in login'
         }
     }
    }
}

export const cafeteriaRemark = (payload) => async dispatch => {
    try {
        console.log('API clled', `http://food.breeur.in/api/addcafe_remark.php`)
        const res = await axios.post('http://food.breeur.in/api/addcafe_remark.php', payload);
    //   console.log(res.data, 'vendors')
    dispatch(toast('success', res.data.message));
     
        return {
            success: true, data: res.data
        }
    } catch (error) {
        // alert(error);
        console.log(error.message);
     if(error.response) {
         
        dispatch(toast('err', error.response.data.message));
         return {
             success: false, data: error.response.data.message
         }
     }
     else {
         
        dispatch(toast('err', 'Error in login'));
         return {
             success: false, data: 'Error in login'
         }
     }
    }
}

export const fetchEmployeeAmount = (payload) => async dispatch => {
    try {
        console.log('API clled', `http://food.breeur.in/api/wallet_refil.php`)
        const res = await axios.post('http://food.breeur.in/api/wallet_refil.php', payload);
    //   console.log(res.data, 'vendors')
    
     
        if(res.data.success) {
            dispatch(toast('success', res.data.message));
            return {
                success: true, data: res.data.data
            }
        } else {
            dispatch(toast('err', res.data.message));
            return {
                success: false
            }
        }
    } catch (error) {
        // alert(error);
        console.log(error.message);
     if(error.response) {
         
        dispatch(toast('err', error.response.data.message));
         return {
             success: false, data: error.response.data.message
         }
     }
     else {
         
        dispatch(toast('err', 'Error in login'));
         return {
             success: false, data: 'Error in login'
         }
     }
    }
}


export const refillEmployeeAmount = (payload) => async dispatch => {
    try {
        console.log('API clled', `http://food.breeur.in/api/wallet_refil_pay.php`)
        const res = await axios.post('http://food.breeur.in/api/wallet_refil_pay.php', payload);
    //   console.log(res.data, 'vendors')
    dispatch(toast('success', res.data.message));
     
        return {
            success: true, data: res.data
        }
    } catch (error) {
        // alert(error);
        console.log(error.message);
     if(error.response) {
         
        dispatch(toast('err', error.response.data.message));
         return {
             success: false, data: error.response.data.message
         }
     }
     else {
         
        dispatch(toast('err', 'Error in login'));
         return {
             success: false, data: 'Error in login'
         }
     }
    }
}
export const showError = (msg) => async dispatch => {
    dispatch(toast('err', msg));
}