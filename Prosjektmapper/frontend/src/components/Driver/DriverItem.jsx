//viser informasjon om en fører 
//import { propTypes } from 'react-bootstrap/esm/Image';

const DriverItem = ({ id, imgDriver, firstName, lastName, age, nationality}) => {


    const imagePath = `http://localhost:3000/images/drivers/${imgDriver}`;

    //console.log(`bildebane: ./assets/images/${image}`);
    
    return (
        <article className="col-12 col-md-6 col-lg-4">
            <div>
                <img src={imagePath} className="img-fluid" alt={`Picture of ${firstName} ${lastName}`}/>
                <h3>{firstName} {lastName}</h3>
                <p>Age: {age} </p>
                <p>Nationality: {nationality} </p>
            </div>
        </article>
    );
};

export default DriverItem;