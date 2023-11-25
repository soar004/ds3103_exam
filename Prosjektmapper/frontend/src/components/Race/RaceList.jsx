//viser en liste over alle løp
import { useContext, useEffect } from 'react';
import RaceItem from './Raceitem';
import { Formula1Context } from '../../context/Formula1Context';

const RaceList = () => {
    //oppkobling til context
    const {race} = useContext(Formula1Context);

    const getRaceItemJSX = () => {
        const getRaceItemJSX = race.map((races, i) => (
            <RaceItem 
            key={i} 
            grandPrix={races.grandPrix}
            winnerName={races.winnerName}
            winnerTime={races.winnerTime}
            numberOfLaps={races.numberOfLaps}
            ></RaceItem>
        ));
        return getRaceItemJSX;
    }

    useEffect(()=> {
        //getRaceFromService;
    }, []);

    return(
        <div className="race-list">
            <h3 className="fs-1 p-4 text-white">F1 Schedule 2023</h3>
            <section className="row g-3">
                {getRaceItemJSX()}
            </section>
        </div>
    );
};

export default RaceList;