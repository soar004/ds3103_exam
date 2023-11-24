import {createContext, useState, useEffect} from 'react';
import FormulaService from '../services/FormulaService';

export const Formula1Context = createContext({});


export const Formula1Provider = ({children}: {children: React.ReactNode}) => {

    //dataen i contexten
    const [driver, setDriver] = useState([]);
    const [team, setTeam] = useState([]);
    const [race, setRace] = useState([]);

    useEffect(() => {
        getDriverFromService();
        getTeamFromService();
        getRaceFromService();
    }, []);

    const getDriverFromService = async () => {
        try {
            const driverFromService = await FormulaService.getAllDrivers();
            setDriver(driverFromService);
        }
        catch (error){
            console.error("Feil ved henting av førere:", error);
            throw error;
        }
    }

    const getTeamFromService = async () => {
        try {
            const teamFromService = await FormulaService.getAllTeams();
            setTeam(teamFromService);
        }
        catch (error) {
            console.log("Feil ved henting av lag: ", error);
            throw error;
        }
    }

    const getRaceFromService = async () => {
        try{
            const raceFromService = await FormulaService.getAllRaces();
        setRace(raceFromService);
        }catch (error){
            console.log("Feil ved henting av race: ", error);
            throw error;
        }
        
    }
    //tilgangsfunksjoner
    return (
        <Formula1Context.Provider value={{driver, team, race}}>
            {children}
        </Formula1Context.Provider>
    )
}
