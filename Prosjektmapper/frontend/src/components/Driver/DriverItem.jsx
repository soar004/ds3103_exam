//viser informasjon om en fører 
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

const DriverItem = ({ id, firstName, lastName, age, nationality }) => {
    return (
        <div className="driver-card">
            <img src={driver.image} alt={`Picture of ${driver.name}`}/>
            <h3>{driver.name}</h3>
            <p>Age: {driver.age}</p>
            <p>Nationality: {driver.nationality}</p>
        </div>
    );
};

export default DriverItem;