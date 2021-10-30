import axios from "../axios/axios";
class Auth {
    //Login
    postLogin(data){
        return axios.post(`/login/`,data);
    }
}
export default new Auth();