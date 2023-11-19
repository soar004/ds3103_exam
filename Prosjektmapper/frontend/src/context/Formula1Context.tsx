import {createContext, useState, useEffect} from 'react'
import FormulaService from '../services/FormulaService';

export const Formula1Context = createContext();

export const Formula1Provider = ({ children }) => {

    const [driver, setDriver] = useState([]);
    const [team, setTeam] = useState([]);
    const [race, setRace] = useState([]);

    useEffect(() => {
        getDriverFromService();
        getTeamFromService();
        getRaceFromService();
    }, []);

    const getDriverFromService = async () => {
        const driverFromService = await FormulaService.getAllDrivers();
        setDriver(driverFromService);
    }

    const getTeamFromService = async () => {
        const teamFromService = await FormulaService.getAllTeams();
        setTeam(teamFromService);
    }

    const getRaceFromService = async () => {
        const raceFromService = await FormulaService.getAllRaces();
        setRace(raceFromService);
    }


    return (
        <Formula1Context.Provider value = {{driver, team, race}}>
            {children}
        </Formula1Context.Provider>
    )
}
