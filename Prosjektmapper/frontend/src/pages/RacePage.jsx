import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from 'react';
import { Formula1Context } from "../context/Formula1Context";
import RaceList from "../components/Race/RaceList";

const RacePage = () => {
    return(
        <section>
            <RaceList />
        </section>
    )
}
export default RacePage;