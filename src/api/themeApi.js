import axios from 'axios';
import {config} from '../config'


export  const getAllTheme = async ()=>{
    const token = window.localStorage.getItem('4brntoken')
    return axios.get(config.api_url+"/api/v1/theme/get/all", {headers: {'x-access-token': token}})
            .then((response)=>{
                return response.data;
            })
            .catch((err)=>{
                return err;
            })
}