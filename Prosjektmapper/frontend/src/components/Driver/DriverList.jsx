//viser informasjon om alle førere, inkludert informasjon om førerne
import { useContext, useEffect } from 'react';
import FormulaService from '../../services/FormulaService';
import { Formula1Context } from '../../context/Formula1Context';
import DriverItem from './DriverItem';

const DriverList = () => {

    const { driver } = useContext(Formula1Context);
    
    const getDriverItemJSX = () => {
        const getDriverItemJSX = driver.map((driver, i) => (
            <DriverItem 
            key={i} 
            id={driver.id}
            firstName={driver.firstName}
            lastName={driver.lastName}
            age={driver.age}
            nationality={driver.nationality}
            ></DriverItem>
        ));
        return getDriverItemJSX;
    };

    useEffect(() => {
    }, []);

    return(
        <div className="driver-list">
            <h3>Drivers</h3>
            <section className="row g-3">
                {getDriverItemJSX()}
            </section>
        </div>
    );
};

export default DriverList;