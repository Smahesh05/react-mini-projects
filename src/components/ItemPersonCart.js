import { useState } from "react";
import "./ItemPersonCart.css";

function App() {
  const [itemsInPersonCart, setItemsInPersonCart] = useState(0);
  const [lines, setLines] = useState([[10, 3, 4], [5], [2], [3], [4]]);

  const addPersonToLine = (e) => {
    e.preventDefault();

    let leastItemsAmount = 1e9;
    let lineWithList;
    for (let line of lines) {
      const totlamount = line.reduce((sum, value) => sum + value, 0);
      if (totlamount < leastItemsAmount) {
        leastItemsAmount = totlamount;
        lineWithList = line;
      }
    }

    if (!lineWithList) return;

    setLines((prevLine) =>
      prevLine.map((line) =>
        line === lineWithList ? [...line, itemsInPersonCart] : line
      )
    );
  };

  return (
    <div className="App">
      <div className="item-person__cart">
        <form onSubmit={addPersonToLine} className="form-group">
          <input
            type="number"
            required
            value={itemsInPersonCart}
            onChange={(e) =>
              setItemsInPersonCart(e.currentTarget.valueAsNumber)
            }
          />
          <button type="submit" className="btn btn-">
            Checkout
          </button>
        </form>
        <div className="lines">
          {lines.map((line, i) => (
            <div className="line" key={i}>
              {line.map((items, idx) => (
                <div key={idx}>{items}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
