import {createContext} from "react";

export const SpecialistContext = createContext();

const SpecialistContextProvider = (props) => {

    const value = {

    }

    return (
        <SpecialistContext.Provider value={value}>
            {props.children}
        </SpecialistContext.Provider>
    )

};

export default SpecialistContextProvider;