//single selection
//multiple selection
import { useState } from "react";
import data from "./data";
import "./style.css";
import { findAllInRenderedTree } from "react-dom/test-utils";
export default function Accordance() {
  const [Selected, setSelected] = useState(null);
  const [Enabled, setEnabled] = useState(false);
  const [Multiple, setMultiple] = useState([]);
  const handelsingleselection = (getcurrentId) => {
    setSelected(getcurrentId === Selected ? null : getcurrentId);
  };
  const handelMultipleselection = (getcurrentId) => {
    let copymlt = [...Multiple];
    const fincindexofcurrentid = copymlt.indexOf(getcurrentId);
    console.log(fincindexofcurrentid);
    if (fincindexofcurrentid === -1) copymlt.push(getcurrentId);
    else copymlt.splice(fincindexofcurrentid, 1);
    setMultiple(copymlt);
  };

  // console.log(Selected, Multiple);
  return (
    <div className="wrapper">
      {/* <button onClick={() => setEnabled(!Enabled)}>
        Enable multiple selection
      </button> */}
      <div className="accordian">
        {data && data.length > 0 ?
         (
          data.map((dataItem) => (
            <div className="item">

              {/* this is for question box div  */}
              <div
                onClick={
                  () => handelsingleselection(dataItem.id) //for single selection only
              
                  // Enabled
                  //   ? () => handelMultipleselection(dataItem.id)
                  //   : () => handelsingleselection(dataItem.id)
                }
                
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {/* {Enabled
                ? Multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : Selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )} */}

{/* for showing the single accordian  */}
              {Selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) 

        :

         (
          <div>No data present</div>
        )
        }

      </div>
    </div>
  );
}
