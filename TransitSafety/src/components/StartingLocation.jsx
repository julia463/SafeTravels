import {useContext} from 'react'

import {RouteContext} from '../context/RouteContext'
import '../App.css'

const StartingLocation = () => {
    const {data, handleChange} = useContext(RouteContext);

    return (
        <div>
            <h1>Where are you departing from</h1>
            <input defaultValue={data.startingLocation} type="text" name="startingLocation" onChange={handleChange} />
        </div>
    )
}
export default StartingLocation;