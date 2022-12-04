import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Display } from "./components/Display";
import { useEffect, useState } from "react";
import {
  deleteTasks,
  fetchAllTask,
  postTask,
  updateTask,
} from "./helpers/axiosHelpers";
// import { set } from "mongoose";

const hoursPerWeek = 7 * 24;
function App() {
  const [taskList, setTaskList] = useState([]);
  const [itemToDelete, setItemToDelete] = useState([]);
  const [response, setResponse] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  const totalHrs = taskList.reduce((subTtl, item) => subTtl + +item.hr, 0);
  useEffect(() => {
    getTasks();
  }, []);
  //call axios to fetch all data
  const getTasks = async () => {
    const { status, tasks } = await fetchAllTask();
    status === "success" && setTaskList(tasks);
    // console.log(data);
  };
  const addTask = async (data) => {
    if (hoursPerWeek < totalHrs + +data.hr) {
      return alert("Sorry exceeded the total hours of the week");
    }
    // console.log(data);
    const result = await postTask(data);
    console.log(result);
    result?.status === "success" && getTasks();
    setResponse(result);
  };

  const switchTask = async (_id, type) => {
    const result = await updateTask({ _id, type });
    // console.log(_id);
    // const tempArg = taskList.map((item) => {
    //   if (item._id === _id) {
    //     item.type = type;
    //   }
    //   return item;
    // });
    // setTaskList(tempArg);
    setResponse(result);
    result?.status === "success" && getTasks();
  };

  const handleOnSelect = (e) => {
    const { value, checked } = e.target;
    // console.log(value, checked);
    if (checked) {
      setItemToDelete([...itemToDelete, value]);
      setSelectAll(taskList.length === itemToDelete.length + 1);
    } else {
      setItemToDelete(itemToDelete.filter((item) => item !== value));
      setSelectAll(false);
    }
  };
  // console.log(itemToDelete);
  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete")) {
      return;
    }
    const result = await deleteTasks(itemToDelete);
    console.log(result);
    setResponse(result);

    result?.status === "success" && getTasks();
    // console.log("deleting");
    setItemToDelete([]);
  };

  const handleOnchange = (e) => {
    const { checked } = e.target;
    // console.log(value, checked);
    if (checked) {
      setSelectAll(true);
      setItemToDelete(taskList.map((i) => i._id));
    } else {
      setItemToDelete([]);
      setSelectAll(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        {response.message && (
          <div
            className={
              response.status === "success"
                ? "alert alert-success"
                : "alert alert-danger"
            }
          >
            {response.message}
          </div>
        )}
        <Form addTask={addTask} />

        <Display
          taskListProp={taskList}
          switchTaskProps={switchTask}
          handleOnSelect={handleOnSelect}
          itemToDelete={itemToDelete}
        />
        {taskList.length ? (
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              onChange={handleOnchange}
              checked={selectAll}
            />{" "}
            <label htmlFor="">Select All</label>
          </div>
        ) : null}

        <div className="row fw-bold">
          <div className="">
            The total hours allocated = <span>{totalHrs}</span>Hrs
          </div>
        </div>
        {itemToDelete.length > 0 && (
          <div className="d-grid g-2">
            <button onClick={handleOnDelete} className="btn btn-danger">
              Delete Selected {itemToDelete.length} Task(s)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
