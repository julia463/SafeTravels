import React, {createContext, useState} from "react";

export const RouteContext = createContext();

export const RouteContextProvider = ({children}) => {
    const [hasResponse, setHasResponse] = useState(false)
    const  [routes, setRoutes] = useState("")
    const [page, setPage] = useState(0);
    const [data, setData] = useState({
        startingLocation: "",
        endingLocation: "",
        timeOfDay: "",
        preferredMode: "",
        gender: "",
        groupSize: "",
    });
    
    const handleChange = (e) => {
        const type = e.target.type;
        const name = e.target.name;
        const value = e.target.value;


        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const canNext = page != 5;
    const canPrev = page != 0;
    const canSubmit = !canNext && (data.startingLocation != "" && data.endingLocation != "" && data.timeOfDay !="" && data.preferredMode!="")
    return (
        <RouteContext.Provider value={{data, setData, page, setPage, handleChange, canNext, canPrev, canSubmit, hasResponse, setHasResponse, routes, setRoutes}}>
            {children}
        </RouteContext.Provider>
    )
}