import axios from "../axios/axios";

class User {
    getAll() {
        return axios.get(`/api/users`);
    }
    getUserUuid(uuid) {
        return axios.get(`/api/user/${uuid}`);
    }
    createUser(data) {
        return axios.post(`/api/user/`,data);
    }
    editUser(uuid,data) {
        return axios.put(`/api/user/${uuid}`,data);
    }
    deleteUser(uuid) {
        return axios.delete(`/api/user/${uuid}`);
    }

}

export default new User();