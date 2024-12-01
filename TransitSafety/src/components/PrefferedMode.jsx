import {useContext} from 'react'

import {RouteContext} from '../context/RouteContext'
import '../App.css'

const PreferredMode = () => {
    const {data, handleChange} = useContext(RouteContext);

    return (
        <div>
            <h1>Preferred Mode of Transit ex: metro, metrolink, biking, walking, etc. </h1>
            <input defaultValue={data.preferredMode} type="text" name="preferredMode" onChange={handleChange} />
        </div>
    )
}
export default PreferredMode;