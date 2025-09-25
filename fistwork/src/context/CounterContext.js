import { createContext,useContext, useState } from "react";

// step 1: create a context (like creating a box to store data).
const CounterContext = createContext();


export const useCounter = () => {
    const context =useContext(CounterContext)

    if(!context){
        throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
};

export const CounterProvider = ({children}) => {
    const [counter,setCounter]=useState("pratik raj");
    const [name,setName]=useState("raj");

    const sharedData ={
        counter,
        setCounter,
        name,
        setName
    }
    return(
        <CounterContext.Provider value={sharedData}>
            {children}
        </CounterContext.Provider>
    )
}