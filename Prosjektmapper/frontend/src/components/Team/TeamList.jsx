//Viser en liste over et lag
import { useContext, useEffect } from 'react';
import { Formula1Context } from '../../context/Formula1Context';
import TeamItem from './TeamItem';

const TeamList = () => {

    const {team} = useContext(Formula1Context);
    
    const getTeamItemJSX = () => {
        const getTeamItemJSX = team.map((team, i) => (
            <TeamItem 
            key={i} 
            id = {team.id}
            manufacturer={team.manufacturer}
            image={team.image}
            driver1 = {team.driver1}
            driver1Id = {team.driver1Id}
            driver2 = {team.driver2}
            driver2Id = {team.driver2Id}
            ></TeamItem>
        ));
        return getTeamItemJSX;
    }
    useEffect(() => {
    }, []);

    return(
        <div className="team-list">
            <h3>Teams</h3>
            <section className="row g-3">
                {getTeamItemJSX()}
            </section>
        </div>
    );
};

export default TeamList;