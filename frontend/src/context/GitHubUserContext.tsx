import React, { useState } from "react";

export interface MyContextValue {
    login: string | null;
    setLogin: any
}

const myContextValue: MyContextValue = {
    login: null,
    setLogin: (login: string) => { }
}

export const MyContext = React.createContext(myContextValue);

export const MyContextProvider = (props: any): any => {
    const [state, setState] = useState<string | null>(null);

    const setLogin = (login: string | null) => {
        setState(login);
    }

    const context = {
        login: state,
        setLogin: setLogin
    };

    return (
        <MyContext.Provider value={context}>
            {props.children}
        </MyContext.Provider>
    )
}
