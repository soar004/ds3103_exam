//viser informasjon om en fører 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../pages/style.css';

const DriverItem = ({ id, imgDriver, firstName, lastName, age, nationality}) => {


    const imagePath = `http://localhost:3000/images/drivers/${imgDriver}`;

    /*const colorMapping = {
        1: 'orange-hover',
        2: 'blue-hover',
        3: 'white-hover',
        4: 'orange-hover',
        5: 'pink-hover',
        6: 'orange-hover',
        7: 'green-hover',
        8: 'red-hover',
        9: 'green-hover',
        10: 'white-hover',
        11: 'white-hover',
        12: 'blue-hover',
        13: 'red-hover',
        14: 'blue-hover',
        15: 'orange-hover',
        16: 'pink-hover'
    };*/

    //const borderColorClass = colorMapping[id] || 'gray-hover';
    
    return (
        <article className="col-12 col-md-6 col-lg-3 mb-3">
            <div className={`p-3 bg-dark text-light shadow p-3 mb-2 rounded border hover`}>
                <img src={imagePath} className="img-fluid img-thumbnail mx-auto rounded" alt={`Picture of ${firstName} ${lastName}`}/>
                <h3 className="m-2">{firstName} {lastName}</h3>
                <p className="fs-5">Age: {age} </p>
                <p className="fs-5">Nationality: {nationality} </p>
            </div>
        </article>
    );
};

export default DriverItem;