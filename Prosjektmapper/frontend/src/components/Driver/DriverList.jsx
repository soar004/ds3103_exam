//viser informasjon om alle førere, inkludert informasjon om førerne
import { useContext, useEffect } from 'react';
import { Formula1Context } from '../../context/Formula1Context';
import DriverItem from './DriverItem';

const DriverList = () => {
    const { driver } = useContext(Formula1Context);
    
    const getDriverItemJSX = () => {
        const getDriverItemJSX = driver.map((driver, i) => (
            <DriverItem key={i} name={driver}></DriverItem>
        ));
        return getDriverItemJSX;
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