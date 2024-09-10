import { useState } from "react";
import data from "./data";
export default function MultiAccordian() {
  const [selected, setSelected] = useState(null);
  const [enable, setEnabled] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getcurrentId) {
    setSelected(getcurrentId === selected ? null : getcurrentId);
    // console.log(getcurrentId);
  }
  function handelmultipleSelection() {
    let cpyMultiple = [...multiple]
    const findCurrentIndex = cpyMultiple.indexOf(getcurrentId)

    if (findCurrentIndex === -1) cpyMultiple.push(getcurrentId)
    else cpyMultiple.splice(findCurrentIndex, 1);
    setMultiple(cpyMultiple)
  }
  // console.log(selected, multiple)
  return (
    <div>
      <button onClick={() => setEnabled(!enable)}>
        Enable multi selection!
      </button>
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div>
              <div
                onClick={
                  enable
                    ? () => handelmultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? <div>{dataItem.answer}</div> : null}
            </div>
          ))
        )
          :
          (
            <div>No data are present!</div>
          )
        }
      </div>
    </div>
  );
}
