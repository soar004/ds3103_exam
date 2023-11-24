// viser informasjon om et løp
import PropTypes from 'prop-types';

const RaceItem = ({ race }) => {
    return (
        <div className="race-card">
            <h2>{grandPrix}</h2>
            <p>Winner: {winnerName} with winnertime: {winnerTime}</p>
            <p>Country: {grandPrix}</p>
            <p>Number of Laps: {numberOfLaps}</p>
        </div>
    );
};


export default RaceItem;