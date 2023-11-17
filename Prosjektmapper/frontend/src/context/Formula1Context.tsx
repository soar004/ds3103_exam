/*import {createContext, useContext, useState, useEffect} from 'react'
import axios from 'axios';

export const Formula1Context = createContext();

export const useFormula1Context = () => {
    return useContext(Formula1Context);
}
export const Formula1Provider = ({ children }) => {
    const [driver, setDriver] = useState([]);
    const [team, setTeam] = useState([]);
    const [race, setRace] = useState([]);

    const getDriver = async () => {
        try{
            //urlen til api drivers
            const result = await axios.get();
            setDriver(result.data);
        }catch(error){ 
            console.log("Error getting drivers:", error);
        }
    }

    const getTeam = async () => {
        try{
            //urlen til api teams
            const result = await axios.get();
            setTeam(result.data);
        }catch(error){ 
            console.log("Error getting teams:", error);
        }
    }

    const getRace = async () => {
        try{
            //urlen til api races
            const result = await axios.get();
            setRace(result.data);
        }catch(error){ 
            console.log("Error getting races:", error);
        }
    }

    useEffect(() => {
        getDriver();
        getTeam();
        getRace();
    }, []);
    return (
        <Formula1Context.Provider value={{driver, team, race, getDriver, getTeam, getRace}}>
            {children}
        </Formula1Context.Provider>
    )
}
*/