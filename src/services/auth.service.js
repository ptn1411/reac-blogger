import axios from "../axios/axios";
class Auth {
    //Login
    postLogin(data){
        return axios.post(`/api/login/`,data);
    }
    getLogout(){
        return axios.get(`/api/logout/`);
    }
}
export default new Auth();