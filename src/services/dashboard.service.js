import axios from "../axios/axios";

class Dashboard {
    getUserCount() {
        return axios.get("/api/usercount");
    }
    getPostCount() {
        return axios.get("/api/postcount");
    }
}
export default new Dashboard();
