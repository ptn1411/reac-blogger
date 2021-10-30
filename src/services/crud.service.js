import axios from "../axios/axios";

class Crud {
    getAll() {
        return axios.get(`/users`);
    }
    getUserUuid(uuid) {
        return axios.get(`/user/${uuid}`);
    }
    createUser(data) {
        return axios.post(`/user/`,data);
    }
    editUser(uuid,data) {
        return axios.put(`/user/${uuid}`,data);
    }
    deleteUser(uuid) {
        return axios.delete(`/user/${uuid}`);
    }

}

export default new Crud();