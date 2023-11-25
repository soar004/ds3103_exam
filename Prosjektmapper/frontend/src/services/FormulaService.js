import axios from "axios";

const FormulaService = (() => {

    const apiEndPoints= {
        "drivers": "http://localhost:3000/api/drivers",
        "teams": "http://localhost:3000/api/teams",
        "races":"http://localhost:3000/api/races",
        "uploadImage": "http://localhost:3000/api/ImageUpload"
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

    //funksjon for å pakke inn bildet og sende det til webApiet
    //må være async
    const postDriver = async (newDriver, imgDriver) => {
        const result = await axios.post(apiEndPoints.drivers, newDriver);
        const formData = new FormData();
        formData.append("formFile", imgDriver);

        //sender bildet til webApiet
        const uploadResult = await axios({
            url: apiEndPoints.uploadImage,
            method: "POST",
            data: formData,
            headers: {"Content-Type":"multipart/form-data" }
        });
        formData.delete("formFile");

        return{ driverResult: result.data, uploadResult: uploadResult.data};
    }
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
        getDriverById,
        getAllRaces,
        getAllTeams,
        postDriver,
    };

})();

export default FormulaService;