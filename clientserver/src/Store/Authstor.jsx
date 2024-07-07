// import { Children, createContext, useContext } from "react";


// export const Authcontext = createContext();

// export const Authprovider = ({ children }) => {

//     const storinlocal = (servertoken) => {
//         return (
//             localStorage.setItem("Token", servertoken)
//         )
//     }

//     return (
//         <Authcontext.Provider value={{ storinlocal }}>
//             {children}
//         </Authcontext.Provider>
//     )
// }

// export const useauth = () => {
//     return useContext(Authcontext)
// }