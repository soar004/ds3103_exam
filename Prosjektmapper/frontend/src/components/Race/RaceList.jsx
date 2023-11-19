//viser en liste over alle løp
import { useContext, useEffect } from 'react';
import RaceItem from './Raceitem';
import { Formula1Context } from '../../context/Formula1Context';

const RaceList = () => {
    const {race} = useContext(Formula1Context);

    useEffect(()=> {
        getRaceFromService;
    }, []);

    return(
        <div>
            {race.map((race) => (
                <RaceItem key={race.id} race={race} />
            ))}
        </div>
    );
};

export default RaceList;