//Viser en liste over et lag
import { useContext, useEffect } from 'react';
import { Formula1Context } from '../../context/Formula1Context';
import TeamItem from './TeamItem';

const TeamList = () => {

    const {team} = useContext(Formula1Context);
    
    const getTeamItemJSX = () => {
        const getTeamItemJSX = team.map((teams, i) => (
            <TeamItem 
            key={i} 
            id = {teams.id}
            manufacturer={teams.manufacturer}
            imgCar={teams.imgCar}
            driver1 = {teams.driver1}
            driver1Id = {teams.driver1Id}
            driver2 = {teams.driver2}
            driver2Id = {teams.driver2Id}
            ></TeamItem>
        ));
        return getTeamItemJSX;
    }
    useEffect(() => {
    }, []);

    return(
        <div className="team-list">
            <h3 className="fs-1 p-4 text-white">Teams</h3>
            <section className="row g-3 d-flex align-items-stretch">
                {getTeamItemJSX()}
            </section>
        </div>
    );
};

export default TeamList;