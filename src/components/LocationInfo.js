import React from 'react';
import './Location-style.css';
import './grid.css';

const LocationInfo = ({dimension,type,name,residents}) =>{
    return(
        <div className="col-lg-4">
            <div className="container-card">
                <div className="card-info">
                    <h2>{dimension}</h2>
                    <h2>Type: {type}</h2>
                    <h3>Name: {name}</h3>
                    <h4>Number of residents: {residents}</h4>
                </div>
            </div>
        </div>
    )
}

export default LocationInfo;