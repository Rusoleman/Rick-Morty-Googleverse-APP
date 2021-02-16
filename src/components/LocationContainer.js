import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox.js';
import LocationInfo from './LocationInfo.js';
import Character from './ResidentContainer';
import './Location-style.css'
import './grid.css'
//═════════════════Extern════════════════════
import axios from 'axios';

const LocationContainer = () =>{
    const [location, setLocation] = useState("Citadel of Ricks")
    const [ubication, setUbication] = useState([])
    const [residents, setResidents] = useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/?name=${location}`)
            .then(response =>{
                setUbication({
                    datos:response.data.results.slice(0, 1),
                    dimension:response.data.results[0].dimension,
                    name:response.data.results[0].name,
                    type:response.data.results[0].type,
                    residentNumber:response.data.results[0].residents.length,
                })
                setResidents(
                    response.data.results[0].residents
                )
            })
            .catch(err =>{
                console.log(err)
            })
    },[location])

    return(
        <>
        <SearchBox setLocation={setLocation}/>
        <div className="row">
            <LocationInfo 
                dimension={ubication.dimension} 
                name={ubication.name} type={ubication.type} 
                residents={ubication.residentNumber}/>
            <div className="col-lg-8">
                <Character residents={residents} flag={location}/>
            </div>
        </div>
        </>
    )
}

export default LocationContainer;