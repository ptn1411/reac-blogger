import axios from "../axios/axios";

class Post {
    getAll() {
        return axios.get(`/api/postall`);
    }
    getPostPage(page , size) {
        return axios.get(`/api/posts?page=${page}&size=${size}`);
    }
    getPostUuid(uuid) {
        return axios.get(`/api/post/${uuid}`);
    }
    createPost(data) {
        return axios.post(`/api/post`,data);
    }
    editPost(uuid,data) {
        return axios.put(`/api/post/${uuid}`,data);
    }
    deletePost(uuid) {
        return axios.delete(`/api/post/${uuid}`);
    }
    viewNumber(uuid) {
        return axios.get(`/api/post/view/${uuid}`);
    }

}

export default new Post();