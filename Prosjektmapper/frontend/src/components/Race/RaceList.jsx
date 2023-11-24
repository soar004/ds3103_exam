//viser en liste over alle løp
import { useContext, useEffect } from 'react';
import RaceItem from './Raceitem';
import { Formula1Context } from '../../context/Formula1Context';

const RaceList = () => {
    //oppkobling til context
    const {race} = useContext(Formula1Context);

    const getRaceItemJSX = () => {
        const getRaceItemJSX = race.map((race, i) => (
            <RaceItem key={i} name={race}></RaceItem>
        ));
        return getRaceItemJSX;
    }

    useEffect(()=> {
        //getRaceFromService;
    }, []);

    return(
        <section>
            {getRaceItemJSX()}
        </section>
    );
};

export default RaceList;