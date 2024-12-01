import {useContext} from 'react'

import {RouteContext} from '../context/RouteContext';
import EndingLocation from './EndingLocation';
import StartingLocation from './StartingLocation';
import PreferredMode from './PrefferedMode';
import TimeOfDay from './TimeOfDay'; 
import Gender from './Gender';
import GroupSize from './GroupSize';
import '../App.css'

const Inputs = () => {
    const {page} = useContext(RouteContext);

    const display = {
        0: <EndingLocation />,
        1: <StartingLocation />,
        2: <TimeOfDay />,
        3: <Gender />,
        4: <GroupSize />,
        5: <PreferredMode />
    }
    return (
        <div>
            {display[page]}
        </div>
    )
}
export default Inputs;