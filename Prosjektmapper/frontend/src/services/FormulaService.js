import axios from "axios";

const FormulaService = (() => {
    const driversController = "http://localhost:5004/api/drivers";
    const teamsController = "http://localhost:5004/api/teams";
    const racesController = "http://localhost:5004/api/races";

    const getAllDrivers = async () => {
        try{
            const result = await axios.get(driversController);
            return result.data;
        }
        catch{
            console.log("Ikke kontakt med driverscontroller");
            return [];
        }
    }
    const getAllTeams = async () => {
        try{
            const result = await axios.get(teamsController);
            return result.data;
        }
        catch{
            console.log("Ikke kontakt med teamsscontroller");
            return [];
        }
    }
    const getAllRaces = async () => {
        try{
            const result = await axios.get(racesController);
            return result.data;
        }
        catch{
            console.log("Ikke kontakt med racescontroller");
            return [];
        }
    }

    return {
        getAllDrivers,
        getAllTeams,
        getAllRaces
    };

})();
export default FormulaService;