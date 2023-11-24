import { useContext, useEffect } from 'react';
import { Formula1Context } from "../context/Formula1Context";
import DriverList from '../components/Driver/DriverList';
import TeamList from '../components/Team/TeamList';

const DriverPage = () => {
    const { driver, team } = useContext(Formula1Context);

    useEffect(() => {

    }, []);
    return(
        <>
            <h1>Seasons Formula 1 overview</h1>
            
            <section>
                <DriverList/>
            </section>

            <section>
                <TeamList/>
            </section>
        </>
    );
};
export default DriverPage;