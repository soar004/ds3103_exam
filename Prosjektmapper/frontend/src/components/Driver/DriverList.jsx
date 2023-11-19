//viser informasjon om alle førere, inkludert informasjon om førerne
import { useContext, useEffect } from 'react';
import { Formula1Context } from '../../context/Formula1Context';
import DriverItem from './DriverItem';

const DriverList = () => {
    const { driver } = useContext(Formula1Context);

    useEffect(() => {

    }, []);

    return(
        <div className="driver-list">
            {driver.map((driver) => (
                <DriverItem key={driver.id} driver={driver}/>
            ))}
        </div>
    );
};

export default DriverList;