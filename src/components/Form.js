import React, { useState } from "react";
export const Form = ({ addTask }) => {
  const [form, setForm] = useState({ type: "entry" });
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    // console.log(value, name);
    setForm({
      ...form, //spread
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // console.log(_id);
    // console.log(e);
    addTask({ ...form });
  };
  // console.log(form);
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="row mt-3 g-2">
          <div className="col-md-7">
            <input
              name="task"
              type="text"
              className="form-control"
              placeholder="Task Name"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-2">
            <input
              name="hr"
              type="number"
              className="form-control"
              min="1"
              placeholder="Hour Spent"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              <i className="fa-solid fa-plus"></i> New Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
