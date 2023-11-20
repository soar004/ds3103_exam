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
        showDriver(driver);
    });
 }
 const showTeams = (teamArray) => {
    teamArray.forEach(team => {
        showTeam(team);
    });
 }
 const showRaces = (raceArray) => {
    raceArray.forEach(race => {
        showRace(race);
    });
 }

 const showDriver = (driver) => {
    let htmlTxt = `
        <article>
            <h3>${driver.Firstname}${driver.lastname}(${driver.Id})</h3>
            <p>${driver.DateOfBirth}</p>
            <p>${driver.Nationality}</p>
            <img>
            <p>${driver.Age} år gammel </p>
        </article>
    `;
    outputSection.innerHTML += htmlTxt;
 }

 const showTeam = (team) => {
    let htmlTxt = `
        <article>
            <h3>${team.Manufacturer}(${team.Id})</h3>
            <p>${team.Driver1}(${team.Driver1Id}) ${team.Driver2} (${team.Driver2Id})</p>
            <img>
        </article>
    `;
    outputSection.innerHTML += htmlTxt;
 }

 const showRace = (race) => {
    let htmlTxt = `
        <article>
            <h3>${race.Grandprix}</h3>
            <p>${race.Id}
            <p>${race.Winner} ${race.WinnerTime}</p>
            <p>${race.NumberOfLaps}</p>
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