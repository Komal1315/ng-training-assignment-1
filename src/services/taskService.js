import axios from "axios";
//import task from "../../../backend/routes/task";
import TaskList from "../components/TaskList";

const API = "http://localhost:3000/api";

export const getTasks = () => axios.get({API});
export const addTask = (task) => axios.post({API});
export const updateTask = (id, task) => axios.put({API}/{id});
export const deleteTask = (id) => axios.delete({API}/{id});

