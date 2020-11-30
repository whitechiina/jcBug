import qs from 'querystring'
import axios from 'axios'

// 1. 定义基础路径
const BASE_URL = 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/'

export default {
    getHomeData(){
        return axios.get(BASE_URL + 'homeApi')
    },
    getMenuType(){
        return axios.get(BASE_URL + 'recipe/allScene')
    },
    getMenuList(){
        return axios.get(BASE_URL + 'recipe/menulist',{
            params:{
                id: lk01
            }
        })
    }
}   
