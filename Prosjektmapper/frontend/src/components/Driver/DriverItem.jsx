//viser informasjon om en fører 
import { propTypes } from 'react-bootstrap/esm/Image';

const DriverItem = ({ id, firstName, lastName, age, nationality}) => {
    
    return (
        <article className="col-12 col-md-6 col-lg-4">
            <div>
                <img src={image} alt={`Picture of ${driver.name}`}/>
                <h3>{firstName}{lastName}</h3>
                <p>Age: {age} </p>
                <p>Nationality: {nationality} </p>
            </div>
        </article>
    );
};

export default DriverItem;