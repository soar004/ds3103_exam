//viser informasjon om et lag, inkludert førerne
import DriverItem from '../Driver/DriverItem';
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';

const TeamItem = ({ id, manufacturer, image, driver1, driver1Id, driver2, driver2Id }) => {
    return (
        <article className="col-12 col-md-6 col-lg-4">
            <div>
                <h3>{manufacturer}</h3>
                <img src={image} alt={`Picture of ${manufacturer}'s car`}/>
                <p>Driver 1: {driver1}</p>
                <p>Driver 2: {driver2}</p>
            </div>
        </article>
    );
};

export default TeamItem;