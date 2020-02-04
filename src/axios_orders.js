import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-78c9c.firebaseio.com/"
});

export default instance;
