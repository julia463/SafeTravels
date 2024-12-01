import {useContext} from 'react'
import { RouteContext } from "../context/RouteContext";
import "../App.css";

const TimeOfDay = () => {
  const { data, handleChange } = useContext( RouteContext );

  return (
    <div>
      <h1>What time of day will you be making this trip?</h1>
      <input
        defaultValue={data.timeOfDay}
        type="text"
        name="timeOfDay"
        onChange={handleChange}
      />
    </div>
  );
};
export default TimeOfDay;
