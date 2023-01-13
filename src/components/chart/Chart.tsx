import React, { useState } from "react";

import ChartBar from "./ChartBar";

const Chart = (props: any) => {
  const dataPoints: any[] = props.cols;

  return (
    <div className="surface-500 flex flex-row flex-wrap justify-content-between p-2 border-round align-items-end text-white">
      <h2 className="w-full mb-5">Nº Cols by Amount:</h2>
      {dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.amount}
          value={dataPoints.times}
          label={dataPoints.amount}
        />
      ))}
    </div>
  );
};

export default Chart;
