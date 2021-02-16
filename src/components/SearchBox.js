import React,{useState} from 'react';
import './SearchBox-style.css';

const SearchBox  = ({setLocation}) => {
    const[value, setValue] = useState("") 

    const handleRequestSearch = (event) => {
        event.preventDefault();
        setLocation(value)
    }
    return (
        <div className="row">
            <form className="container-form" onSubmit={(event) => handleRequestSearch(event)}>
                <input placeholder="Location" name="name" type="text" onChange={event => setValue(event.target.value)}/>
                <button className="button-style" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBox;