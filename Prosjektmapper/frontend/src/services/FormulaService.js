import axios from "axios";

const FormulaService = (() => {
    const driversController = "http://localhost:3000/api/drivers";
    const teamsController = "http://localhost:3000/api/teams";
    const racesController = "http://localhost:3000/api/races";

    const getAllDrivers = async () => {
        try{
            const result = await axios.get(driversController);
            console.log(result);
            return result.data;
        }
        catch(error) {
            console.error("Feil ved henting av førere: ", error);
            throw error;
        }
    };
    const getAllTeams = async () => {
        try{
            const result = await axios.get(teamsController);
            return result.data;
        }
        catch(error){
            console.log("Feil ved henting av lag:", error);
            throw error;
        }
    };
    const getAllRaces = async () => {
        try{
            const result = await axios.get(racesController);
            return result.data
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