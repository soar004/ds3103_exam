//viser informasjon om alle førere, inkludert informasjon om førerne
import { useContext, useEffect } from 'react';
import FormulaService from '../../services/FormulaService';
import { Formula1Context } from '../../context/Formula1Context';
import DriverItem from './DriverItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const DriverList = () => {

    const { driver } = useContext(Formula1Context);
    
    const getDriverItemJSX = () => {
        const getDriverItemJSX = driver.map((drivers, i) => (
            <DriverItem 
            key={i} 
            id={drivers.id}
            imgDriver={drivers.imgDriver}
            firstName={drivers.firstName}
            lastName={drivers.lastName}
            age={drivers.age}
            nationality={drivers.nationality}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            ></DriverItem>
        ));
        return getDriverItemJSX;
    };

    useEffect(() => {
        //getDriverFromService();
    }, []);

    return(
        <div className="driver-list">
            <h3 className="fs-1 p-4 text-white">Drivers</h3>
            <section className="row g-3">
                {getDriverItemJSX()}
            </section>
        </div>
    );
};

export default DriverList;