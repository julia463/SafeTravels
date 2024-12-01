import {useContext} from 'react'

import {RouteContext} from '../context/RouteContext'
import '../App.css'

const GroupSize = () => {
    const {data, handleChange} = useContext(RouteContext);

    return (
        <div>
            <h1>What size of a group will you be travelling with?</h1>
            <p>This info is relevant for us to know so we can take that additional factor into safety.</p>
            <select name="groupSize" defaultValue={data.groupSize} onChange={handleChange}>
                <option value="solo">Solo</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4 or more">4 or more people</option>



            </select>
        </div>
    )
}
export default GroupSize;