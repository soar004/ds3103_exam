import {createContext, useContext, useState, useEffect} from 'react'
import axios from 'axios';

export const Formula1Context = createContext();

export const useFormula1Context = () => {
    return useContext(Formula1Context);
}

export const Formula1Provider = ({ children }) => {
    const [drivers, setDrivers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [races, setRaces] = useState([]);

    useEffect(() => {

    }, []);
}

