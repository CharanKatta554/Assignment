import { useState } from "react"
import "./filter.css"

function Filter(props) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="dropdown">
            <button onClick={toggleDropDown} className="filterbutton">Filters</button>
            {isOpen && (
                <div className="dropdowncontent">
                    {props.data.map((data) => {
                        return <p className="dropdowndata">{data}</p>
                    })}
                </div>
            )}

        </div>
    )}

export default Filter;