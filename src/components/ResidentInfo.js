import React from 'react';
import './Resident-style.css';
import './grid.css';

const Character = ({nameResident, image, status, origin, aparitions}) =>{
    return(
        <div className="col-lg-4 col-md-4">
            <div className="container-character">
                <div className="card-character">
                    <h3>{nameResident}</h3>
                    <figure>
                        <img src={image}/>
                    </figure>
                    <h4>Status: {status}</h4>
                    <h4>Origin: {origin}</h4>
                    <h4>Aparitions: {aparitions}</h4>
                </div>
            </div>
        </div>
    )
}

export default Character;