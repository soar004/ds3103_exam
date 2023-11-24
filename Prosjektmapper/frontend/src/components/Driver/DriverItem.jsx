//viser informasjon om en fører 
import 'bootstrap/dist/css/bootstrap.min.css';

const DriverItem = ({ id, imgDriver, firstName, lastName, age, nationality}) => {


    const imagePath = `http://localhost:3000/images/drivers/${imgDriver}`;

    //console.log(`bildebane: ./assets/images/${image}`);
    
    return (
        <article className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="p-3 bg-dark text-light shadow p-3 mb-2 rounded">
                <img src={imagePath} className="img-fluid img-thumbnail mx-auto rounded" alt={`Picture of ${firstName} ${lastName}`}/>
                <h3 className="m-2">{firstName} {lastName}</h3>
                <p className="fs-5">Age: {age} </p>
                <p className="fs-5">Nationality: {nationality} </p>
            </div>
        </article>
    );
};

export default DriverItem;