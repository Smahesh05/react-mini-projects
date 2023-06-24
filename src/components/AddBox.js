import React, { useState } from "react";

import "./AddBox.css";

const AddBox = () => {
  const [cells, setCells] = useState(["a", "b", "c"]);

  const onChange = (newCell, indexToUpdate) => {
    setCells((prev) =>
      prev.map((cell, index) => (index === indexToUpdate ? newCell : cell))
    );
  };

  const handlePlusClicked = (idx) => {
    setCells((prevCell) => [
      ...prevCell.slice(0, idx + 1),
      "_",
      ...prevCell.slice(idx + 1),
    ]);
  };

  const combimeString = cells.join(",");

  return (
    <div className="App">
      <div>
        <section className="cells">
          {cells.map((cell, idx) => (
            <div key={idx} className="cell">
              <input
                type="text"
                className="inputEl"
                value={cell}
                onChange={(e) => onChange(e.target.value, idx)}
              />
              {idx < cells.length - 1 && (
                <span className="plus" onClick={() => handlePlusClicked(idx)}>
                  &nbsp;
                </span>
              )}
            </div>
          ))}
        </section>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          {combimeString}
        </div>
      </div>
    </div>
  );
};

export default AddBox;
