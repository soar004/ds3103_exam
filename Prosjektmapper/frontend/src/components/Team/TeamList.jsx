//Viser en liste over et lag
import { useContext, useEffect } from 'react';
import { Formula1Context } from '../../context/Formula1Context';
import TeamItem from './TeamItem';

const TeamList = () => {

    const {team} = useContext(Formula1Context);
    useEffect(() => {

    }, []);

    return(
        <div>
            {team.map((team) => (
                <Card key={team.manufacturer} className="mb-3">
                    <Card.Header>{team.manufacturer}</Card.Header>
                    <Card.Body>
                        <Card.Title>{TeamItem.manufacturer}</Card.Title>
                        <Card.Text>
                            Driver 1: {team.driver1}
                            Driver 2: {team.driver2}
                        </Card.Text>
                        {team.image}
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default TeamList;