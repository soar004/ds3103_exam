//viser informasjon om et lag, inkludert førerne
import PropTypes from 'prop-types';
import DriverItem from '../Driver/DriverItem';
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';

const TeamItem = ({ team }) => {
    return (
        <div className="team-card">
            <h2>{team.manufacturer}</h2>
            <img src={team.image} alt="Bilde av ${team.manufacturer}"/>
            <h3>Drivers:</h3>
            <div>
                {team.drivers.map((driver) => (
                    <DriverItem key={driver.id} driver={driver}/>
                ))}
            </div>
        </div>
    );
};

TeamItem.propTypes = {
    team: PropTypes.shape({
        id: PropTypes.number.isRequired,
        manufacturer: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        drivers: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                age: PropTypes.number.isRequired,
                nationality: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default TeamItem;