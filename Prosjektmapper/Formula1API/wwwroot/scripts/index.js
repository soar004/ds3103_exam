const outputSection = document.querySelector("#output-section");

const fetchData = async (url, displayFunction) => {
	try {
		const result = await axios.get(url);
		clearOutput();
		displayFunction(result.data);
	} catch (err) {
		console.log(err);
	}
};

const displayDrivers = (drivers) => {
	drivers.forEach((driver) => showDriver(driver));
};

const displayTeams = (teams) => {
	teams.forEach((team) => showTeam(team));
};

const displayRaces = (races) => {
	races.forEach((race) => showRace(race));
};

const clearOutput = () => {
	outputSection.innerHTML = "";
};

const showDriver = (driver) => {
	// display driver details
};

const showTeam = (team) => {
	// display team details
};

const showRace = (race) => {
	// display race details
};

// Event listeners
const buttons = {
	"get-all-drivers-btn": {
		url: "http://localhost:3000/api/drivers",
		displayFunc: displayDrivers,
	},
	"get-all-teams-btn": {
		url: "http://localhost:3000/api/teams",
		displayFunc: displayTeams,
	},
	"get-all-races-btn": {
		url: "http://localhost:3000/api/races",
		displayFunc: displayRaces,
	},
	// Add more buttons here as needed
};

Object.keys(buttons).forEach((buttonId) => {
	const button = document.querySelector(`#${buttonId}`);
	if (button) {
		button.addEventListener("click", async () => {
			const { url, displayFunc } = buttons[buttonId];
			await fetchData(url, displayFunc);
		});
	}
});
