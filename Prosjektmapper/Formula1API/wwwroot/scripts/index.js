//html-objects
const outputSection = document.querySelector("#output-section");
const getAllDriversBtn = document.querySelector("#get-all-drivers-btn");
const SaveNewDriverBtn = document.querySelector("#save-new-driver-btn");
const deleteDriverBtn = document.querySelector("#delete-driver-btn");
const editDriverBtn = document.querySelector("#edit-driver-btn");

const getAllTeamsbtn = document.querySelector("#get-all-teams-btn");
const getAllRacesBtn = document.querySelector("#get-all-races-btn");

 const getAllDrivers = async () => {
    try{
        const result = await axios.get("http://localhost:3000/api/drivers");
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
 }

 const getAllTeams = async () => {
    try{
        const result = await axios.get("http://localhost:3000/api/teams");
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
 }

 const getAllRaces = async () => {
    try{
        const result = await axios.get("http://localhost:3000/api/races");
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
 }

 //funksjoner

 const showDrivers = (driverArray) => {
    driverArray.forEach(driver => {
        showDrivers(driver);
    });
 }
 const showDriver = (orc) => {
    let htmlTxt = `
        <article>
            <h3>${driver.firstname}${driver.lastname}(${driver.id})</h3>
            <p>${driver.DateOfBirth}</p>
            <p>${driver.Nationality}</p>
            <img>
            <p>${driver.Age} år gammel </p>
        </article>
    `;
    outputSection.innerHTML += htmlTxt;
 }
 const clearOutput = () => {
    outputSection.innerHTML = "";
 }

//events

getAllDriversBtn.addEventListener("click", () => {
    clearOutput();
    getAllDrivers();
});
getAllTeamsbtn.addEventListener("click", () => {
    clearOutput();
    getAllTeams();
})

getAllRacesBtn.addEventListener("click", () => {
    clearOutput();
    getAllRaces();
})