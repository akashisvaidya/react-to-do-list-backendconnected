import React from "react";

export const GoodList = ({
  taskListPropDrillDown,
  switchTaskPropDd,
  handleOnSelect,
  itemToDelete,
}) => {
  // console.log(taskListPropDrillDown);
  return (
    <div>
      <div className="col-md">
        <h2 className="text-center">Entry List</h2>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="task-list">
            {taskListPropDrillDown.map((item) => {
              // console.log(item, i);
              return (
                <tr key={item._id}>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item._id}
                      onChange={handleOnSelect} // higher order function so the empty
                      //function is executed first and the second fucntion is carried away
                      checked={itemToDelete.includes(item._id)}
                    ></input>
                  </td>
                  <td>{item.task}</td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button
                      onClick={() => switchTaskPropDd(item._id, "bad")}
                      className="btn btn-success"
                    >
                      <i className="fa-solid fa-right-long"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
