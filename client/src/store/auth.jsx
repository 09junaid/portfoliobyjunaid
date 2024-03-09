import { createContext, useContext, useState } from "react";
//todo----------Context---------------------
export const AuthContext=createContext();
//*---------------End Context----------------

//todo-----------Provider------------------
export const AuthProvider=({children})=>{
    //---> this state variable used for logout functionallity-----------
    const[token,setToken]=useState(localStorage.getItem("token"))
    // const[users,setUser]=useState("");
    //-----------------------End state variable---------------------
    
    const storetokenInLS=(serverToken)=>{
        setToken(serverToken);//_____this line show the logout quickly
        return localStorage.setItem('token',serverToken)
    };
    let isLoggedIn= !!token;
    console.log("logout and logedin::",isLoggedIn);
    //----the meaning of this line if the token value is true then isLoggedIn value true, if value is false then loggedIn value is false
//*----------Logout Functionallity-----------------
const LogoutUser=()=>{
    setToken("");
    return localStorage.removeItem("token")
};

//*-------------End Logut Functionallity----------
//__________JWT AUTHENTICATION to get the user data_____________
// const userAuthenticate=async()=>{
//     useEffect(()=>{
//         userAuthenticate();
//         },[]);
// try {
//     const response=await fetch(`http://localhost:5000/users`,{
//         method:"GET",
//         headers:{
//             Authorization:`Bearer ${token}`
//         },
//     });
//     if(response.ok){
//         const data=await response.json();
//         console.log("user data",data.userData);
//         setUser(data.userData)
//     }
// } catch (error) {
//     console.error("Error fetching user data");
// }
// };
    return <AuthContext.Provider value={{isLoggedIn,storetokenInLS,LogoutUser}}>
        {children}
    </AuthContext.Provider>
};
//*-----------End Provider--------------------

//?----------Delivery boy----------------------
//---------custome hook--------------
export const useAuth=()=>{
    //----------consumer---------
    const authContextValue= useContext(AuthContext)
    //---------End Consumer all data in useAuth--------------
    if(!authContextValue){
        throw new Error("you have not render the auth on main.jsx")
    }
    return authContextValue;
};