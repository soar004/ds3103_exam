import { useContext, useEffect } from 'react';
import { Formula1Context } from "../context/Formula1Context";
import DriverList from '../components/Driver/DriverList';
import TeamList from '../components/Team/TeamList';
import 'bootstrap/dist/css/bootstrap.min.css';


const DriverPage = () => {
    const { driver, team } = useContext(Formula1Context);

    useEffect(() => {

    }, []);
    return(
        <div className="container">
            <h2 className="m-4 p-4 fs-1 text-white">Seasons Formula 1 overview</h2>
            <section>
                <DriverList/>
            </section>

            <section>
                <TeamList/>
            </section>
        </div>
    );
};
export default DriverPage;