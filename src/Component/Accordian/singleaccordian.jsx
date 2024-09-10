import { useState } from "react";
import data from "./data";
export default function SingleAccordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getcurrentId){
        setSelected(getcurrentId === selected ? null : getcurrentId);
        console.log(getcurrentId)
  }
  
  return (
    <div>
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div>
              <div onClick={()=> handleSingleSelection(dataItem.id)}>
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                selected === dataItem.id ? 
                <div>
                    {dataItem.answer}
                </div>
                : null
              }
            </div>
          ))
        ) : (
          <div>No data are present!</div>
        )}
      </div>
    </div>
  );
}

