// viser informasjon om et løp
const RaceItem = ({ grandPrix, winnerName, winnerTime, numberOfLaps }) => {
    return (
        <article className="col-12 col-sm-8 col-md-6">
            <div className="p-3 bg-dark text-light rounded">
                <h2 className="m-2 text-white">{grandPrix}</h2>
                <p className="fs-5 text-white">Winner: {winnerName} with winnertime: {winnerTime}</p>
                <p className="text-white">Country: {grandPrix}</p>
                <p className="text-white">Number of Laps: {numberOfLaps}</p>
            </div>
        </article>
    );
};


export default RaceItem;