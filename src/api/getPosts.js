import axios from "axios";

export const getPosts = async () =>
  (await axios.get("https://jsonplaceholder.typicode.com/posts")).data;
