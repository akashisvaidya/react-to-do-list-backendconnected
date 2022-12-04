import React from "react";
import { Badlist } from "./Badlist";
import { GoodList } from "./GoodList";

export const Display = ({
  taskListProp,
  switchTaskProps,
  handleOnSelect,
  itemToDelete,
}) => {
  // console.log(taskListProp);

  const entryList = taskListProp.filter((item) => item.type === "entry");

  const badList = taskListProp.filter((item) => item.type === "bad");

  return (
    <div>
      <div className="row mt-5 g-2">
        <GoodList
          taskListPropDrillDown={entryList}
          switchTaskPropDd={switchTaskProps}
          handleOnSelect={handleOnSelect}
          itemToDelete={itemToDelete}
        />
        <Badlist
          badListProp={badList}
          handleOnSelect={handleOnSelect}
          itemToDelete={itemToDelete}
          switchTaskPropDd={switchTaskProps}
        />
      </div>
    </div>
  );
};
