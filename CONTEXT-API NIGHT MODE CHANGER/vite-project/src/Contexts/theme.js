import { createContext, useContext } from "react";

const userTheme= createContext({
    themeMode:"light",
    lightTheme:()=>{},
    darkTheme:()=>{}
})


export const ThemeProvider= userTheme.Provider

export function useTheme(){
    return useContext(userTheme)
}