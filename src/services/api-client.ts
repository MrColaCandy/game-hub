import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
       key: "52e575800c7e401bb08aac00ab61a563"
    }
})