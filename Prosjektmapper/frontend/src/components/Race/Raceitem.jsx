// viser informasjon om et løp
import PropTypes from 'prop-types';

const RaceItem = ({ race }) => {
    return (
        <div className="race-card">
            <h2>{race.grandPrix}</h2>
            <p>Winner: {race.winnerName}</p>
            <p>Country: {race.grandPrix}</p>
            <p>Number of Laps: {race.numberOfLaps}</p>
        </div>
    );
};

RaceItem.propTypes = {
    race: PropTypes.shape({
        id: PropTypes.number.isRequired,
        winnerName: PropTypes.string.isRequired,
        winnerTime: PropTypes.string.isRequired,
        grandPrix: PropTypes.string.isRequired,
        numberOfLaps: PropTypes.number.isRequired,
    }).isRequired,
};

export default RaceItem;