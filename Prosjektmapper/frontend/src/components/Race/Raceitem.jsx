// viser informasjon om et løp
const RaceItem = ({ grandPrix, winnerName, winnerTime, numberOfLaps }) => {
    return (
        <article className="col-12 col-sm-8 col-md-6">
            <div className="p-3 bg-dark text-light rounded border-0 border-top border-left border-danger p-3">
                <h2 className="m-2 text-white">{grandPrix}</h2>
                <p className="">Country: {grandPrix}</p>
                <p className="fs-3">Winner: {winnerName} </p>
                <p className="fs-5">Winnertime: {winnerTime}</p>
                <p className="">Number of Laps: {numberOfLaps}</p>
            </div>
        </article>
    );
};


export default RaceItem;