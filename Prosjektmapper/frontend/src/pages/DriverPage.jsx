import { useContext, useEffect } from 'react';
import { Formula1Context } from "../context/Formula1Context";
import DriverList from '../components/Driver/DriverList';
import TeamList from '../components/Team/TeamList';

const DriverPage = () => {
    const { driver, team } = useContext(Formula1Context);

    useEffect(() => {

    }, []);
    return(
        <div>
            <h1>Seasons Formula 1 overview</h1>
            
            <section>
                <h2>Drivers</h2>
                <DriverList/>
            </section>

            <section>
                <h2>Teams</h2>
                <TeamList/>
            </section>
        </div>
    );
};
export default DriverPage;