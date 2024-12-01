import {useContext} from 'react'

import {RouteContext} from '../context/RouteContext'
import '../App.css'

const EndingLocation = () => {
    const {data, handleChange} = useContext(RouteContext);

    return (
        <div>
            <h1>Where are you heading to?</h1>
            <input defaultValue={data.endingLocation} type="text" name="endingLocation" onChange={handleChange} />
        </div>
    )
}
export default EndingLocation;