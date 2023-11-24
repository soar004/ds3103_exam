//viser informasjon om alle førere, inkludert informasjon om førerne
import { useContext, useEffect } from 'react';
import { Formula1Context } from '../../context/Formula1Context';
import DriverItem from './DriverItem';

const DriverList = () => {
    const { driver } = useContext(Formula1Context);
    
    const getDriverItemJSX = () => {
        return driver.map((driver, id) => (
            <DriverItem key={id} driver= {driver} />
        ));
    };

    useEffect(() => {

    }, []);

    return(
        <div className="driver-list">
            {getDriverItemJSX()}
        </div>
    );
};

export default DriverList;