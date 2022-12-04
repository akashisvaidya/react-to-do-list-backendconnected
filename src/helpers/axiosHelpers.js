import axios from "axios";
const rootApiUrl = "http://localhost:8000/api/v1";
const taskEP = rootApiUrl + "/task";
export const fetchAllTask = async () => {
  try {
    const { data } = await axios.get(taskEP);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.massage,
    };
  }
};

export const postTask = async (taskData) => {
  try {
    console.log(taskData);
    const { data } = await axios.post(taskEP, taskData);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateTask = async (taskDt) => {
  try {
    const { data } = await axios.patch(taskEP, taskDt);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteTasks = async (tasks) => {
  try {
    const { data } = await axios.delete(taskEP, { data: tasks });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
