//viser en liste over alle løp
import { useContext, useEffect } from 'react';
import RaceItem from './Raceitem';
import { Formula1Context } from '../../context/Formula1Context';

const RaceList = () => {
    //oppkobling til context
    const {race} = useContext(Formula1Context);

    const getRaceItemJSX = () => {
        const getRaceItemJSX = race.map((race, i) => (
            <RaceItem 
            key={i} 
            grandPrix={race.grandPrix}
            winnerName={race.winnerName}
            winnerTime={race.winnerTime}
            numberOfLaps={race.numberOfLaps}
            ></RaceItem>
        ));
        return getRaceItemJSX;
    }

    useEffect(()=> {
        //getRaceFromService;
    }, []);

    return(
        <div className="race-list">
            <h3>Races</h3>
            <section className="row g-3">
                {getRaceItemJSX()}
            </section>
        </div>
    );
};

export default RaceList;