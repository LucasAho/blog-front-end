import axios from "axios";

const queryURL = "https://guarded-bastion-16379.herokuapp.com/blog/" 
const API = {
    getAllPosts: function() {
        return axios.get(queryURL + "find/all");
    },
    getPostById: function(id) {
        return axios.get(queryURL + "find/" + id);
    }
}
export default API;