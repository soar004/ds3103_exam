//Viser en liste over et lag
import { useContext, useEffect } from 'react';
import { Formula1Context } from '../../context/Formula1Context';
import TeamItem from './TeamItem';

const TeamList = () => {
    useEffect(() => {

    }, []);

    return(
        <div>
            {team.map((team) => (
                <TeamItem key={team.id} team={team}/>
            ))}
        </div>
    );
};

export default TeamList;