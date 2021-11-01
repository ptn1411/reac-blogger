import axios from "../axios/axios";

class Post {
    getAll() {
        return axios.get(`/posts`);
    }
    getPostUuid(uuid) {
        return axios.get(`/post/${uuid}`);
    }
    createPost(data) {
        return axios.post(`/post/`,data);
    }
    editPost(uuid,data) {
        return axios.put(`/post/${uuid}`,data);
    }
    deletePost(uuid) {
        return axios.delete(`/post/${uuid}`);
    }

}

export default new Post();