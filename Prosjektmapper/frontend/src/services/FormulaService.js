import axios from "axios";

const FormulaService = (() => {

    const apiEndPoints= {
        "drivers": "http://localhost:3000/api/drivers",
        "teams": "http://localhost:3000/api/teams",
        "races":"http://localhost:3000/api/races"
    };
    let drivers = [];
    let teams = [];
    let races = [];

    const getAllDrivers = async () => {
        try{
            const result = await axios.get(apiEndPoints.drivers);
            drivers = result.data;
            console.log(drivers);
            return drivers;
        }
        catch(error) {
            console.error("Feil ved henting av førere: ", error);
            throw error;
        }
    };
    const getDriverById = async (id) => {
        const result = await axios.get(`${apiEndPoints.drivers}/${id}`);
        drivers = result.data;
        console.log(drivers);
        return drivers;
    }

    const getAllTeams = async () => {
        try{
            const result = await axios.get(apiEndPoints.teams);
            teams = result.data;
            console.log(teams);
            return teams;
        }
        catch(error){
            console.log("Feil ved henting av lag:", error);
            throw error;
        }
    };

    const getAllRaces = async () => {
        try{
            const result = await axios.get(apiEndPoints.races);
            races = result.data;
            console.log(races);
            return races;
        }
        catch (error){
            console.error('Feil ved henting av race:', error);
            throw error;
        }
    };
    return {
        getAllDrivers,
        getAllRaces,
        getAllTeams,
    };

})();

export default FormulaService;