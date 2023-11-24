//viser informasjon om et lag, inkludert førerne
import DriverItem from '../Driver/DriverItem';
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';

const TeamItem = ({ id, manufacturer, imgCar, driver1, driver1Id, driver2, driver2Id }) => {
    const imagePath = `http://localhost:3000/images/teams/${imgCar}`;

    return (
        <article className="col-12 col-sm-8 col-lg-6">
            <div className="p-3 bg-dark text-light rounded shadow">
                <h3 className="m-2">{manufacturer}</h3>
                <img src={imagePath} className="img-fluid img-thumbnail mx- rounded" alt={`Picture of ${manufacturer}'s car`}/>
                <p>Driver 1: {driver1}</p>
                <p>Driver 2: {driver2}</p>
            </div>
        </article>
    );
};

export default TeamItem;