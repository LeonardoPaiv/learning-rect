import React, { useState } from "react";

const Cols = (props: any) => {
  const dummyCols: any[] = props.cols;

  const [filter, setFilter] = useState("1");

  const filterChangeHandler = (event: any) => {
    setFilter(event.target.value);
  };

  const filteredCols = dummyCols.filter((col) => col.amount == filter);

  let colContents: any = (
    <div className="col-12 md:col-4 text-center">
      <p>Não existem colunas com esse valor</p>
    </div>
  );

  if (filteredCols.length > 0) {
    colContents = filteredCols.map((col, index) => {
      return (
        <div key={index} className="col-12 md:col-4">
          <div
            key={col.id}
            className="surface-600 p-2 border-round-md flex justify-content-between"
          >
            <h2 className="text-xl">{col.title}</h2>
            <h2 className="text-xl">{col.amount}</h2>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="grid">
      <div className="col-12 w-full flex justify-content-end">
        <label htmlFor="filter">Filter:</label>
        <input type="number" value={filter} onChange={filterChangeHandler} />
      </div>
      {colContents}
    </div>
  );
};

export default Cols;
