import { useState } from "react"
import { FaStar } from "react-icons/fa";
import './style.css'
export default function starrating({noofstars = 5}){
    const[rating, setRating] = useState(0)
    const[hover, setHover] = useState(0)
    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }
    // this getcurrentindex refer to the index of map that is current index
    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);

    }
    function handleMouseLeave(){
       
        setHover(rating);
    }
    return(
        <div>
            {/* ...Array is used to create a new array */}
        {[...Array(noofstars)].map((_,index) =>{
            index += 1;
            return (
                <FaStar
                key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
                />
            )

        })}
    </div>
    )
}