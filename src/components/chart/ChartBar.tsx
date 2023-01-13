import React from "react";

const ChartBar = (props: any) => {

  return (
    <div className="flex flex-column w-5rem md:w-max m-2">
      <div className={`h-${props.value}rem bg-primary border-round`}></div>
      <label>Cols com amount: {props.label}</label>
    </div>
  );
};

export default ChartBar;
