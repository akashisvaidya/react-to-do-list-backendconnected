import React from "react";

export const Badlist = ({
  badListProp,
  handleOnSelect,
  itemToDelete,
  switchTaskPropDd,
}) => {
  return (
    <div>
      <div className="col-md">
        <h2 className="text-center">Bad List</h2>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="bad-task">
            {badListProp.map((item, i) => {
              return (
                <tr key={item._id}>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item._id}
                      onChange={handleOnSelect} // higher order function so the empty function is executed first and the second fucntion is carried away
                      checked={itemToDelete.includes(item._id)}
                    ></input>
                  </td>
                  <td>{item.task}</td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button
                      onClick={() => switchTaskPropDd(item._id, "entry")}
                      className="btn btn-warning"
                    >
                      <i className="fa-solid fa-left-long"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-end fw-bold">
          You Could have saved ={" "}
          <span id="totalBadHr">
            {badListProp.reduce((acc, item) => acc + +item.hr, 0)}{" "}
          </span>
          hrs
        </div>
      </div>
    </div>
  );
};
