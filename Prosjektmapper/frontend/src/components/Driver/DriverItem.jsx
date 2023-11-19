//viser informasjon om en fører 
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

const DriverItem = ({ driver }) => {
    return (
        <div className="driver-card">
            <img src={driver-image} alt={`Picture of ${driver.name}`}/>
            <h3>{driver.name}</h3>
            <p>Age: {driver.age}</p>
            <p>Nationality: {driver.nationality}</p>
        </div>
    );
};

DriverItem.propTypes = {
    driver: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        nationality: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
};

export default DriverItem;