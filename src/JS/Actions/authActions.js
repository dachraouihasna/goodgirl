import axios from "axios";
import { AUTH_ERROR, LOGIN, LOGOUT, REGISTER } from "../ActionsType/authActionsTypes"

export const register=(user)=>async(dispatch)=>{
    try {
const res= await axios.post('http://localhost:3000/users', user)
dispatch({
    type:REGISTER,
    payload: res.data
});
    }catch(error){
        dispatch({
            type: AUTH_ERROR,
            payload: error
        });
    }
    
}

export const login =(userData,navigate) => async (dispatch)=>{
    try {

        const res=await axios.get('http://localhost:3000/users')
        console.log(res)
        const filteredUser = res.data.find(
            (el) => el.email === userData.email && el.password === userData.password
        );
        console.log(filteredUser)
        if (filteredUser){
        dispatch({
            type: LOGIN,
            payload: {
                isAuthentificated: true,
                user: filteredUser,
                errors: "",
            },
        });
        localStorage.setItem("id", filteredUser.id);
        navigate("/add")
    } else {
        dispatch({
            type: AUTH_ERROR,
            payload: {
                isAuthentificated:false,
                user:{},
                errors:"invalid gmail or password"
            }
        });
    } 
} catch(error){
dispatch({
    type: AUTH_ERROR,
    payload: error
});
}
 };

 export const logout=(navigate) => (dispatch)=>{
    localStorage.removeItem("id");
    navigate("/home");
    dispatch({
        type: LOGOUT,
    });
 }
    
