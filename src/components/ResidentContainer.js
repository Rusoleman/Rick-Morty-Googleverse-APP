import React,{ useEffect, useState} from 'react';
import Character from './ResidentInfo';
//═════════════════Extern════════════════════
import axios from 'axios';

const ResidentContainer = ({residents}) => {
    
    const [data, setData] = useState([])

    useEffect(() =>{
        const getResidents = async () => {
            const promise = await residents.map((value) => {
                return axios.get(value)
            })

            axios.all(promise)
            .then(axios.spread((...res) => {

                let getResults = res.map((e) => {
                    return e.data
                })
                setData(getResults.slice(0, 10))
            }))  
        }
    
        getResidents();
        
    },[residents])

    const residentsList = data.map((value) => {
        return (
            <Character 
                nameResident={value.name} status={value.status} image={value.image} origin={value.location.name} aparitions={value.episode.length} key={value.id}
            />
        )
    })

    return (
        <>
            <div>
            {residentsList}
            </div>
        </>
    )
}

export default ResidentContainer;