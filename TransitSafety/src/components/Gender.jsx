import {useContext} from 'react'

import {RouteContext} from '../context/RouteContext'
import '../App.css'

const Gender = () => {
    const {data, handleChange} = useContext(RouteContext);

    return (
        <div>
            <h1>What gender do you most closely identify with?</h1>
            <p>This info is relevant for us to know so we can take that additional factor into safety.</p>
            <select name="gender" defaultValue={data.gender} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>


            </select>
        </div>
    )
}
export default Gender;