//Viser en liste over et lag
import { useContext, useEffect } from 'react';
import { Formula1Context } from '../../context/Formula1Context';
import TeamItem from './TeamItem';

const TeamList = () => {

    const {team} = useContext(Formula1Context);
    const getTeamItemJSX = () => {
        const getTeamItemJSX = team.map((team, i) => (
            <TeamItem key={i} name={team}></TeamItem>
        ))
    }
    useEffect(() => {

    }, []);

    return(
        <section>

        </section>
    );
};

export default TeamList;