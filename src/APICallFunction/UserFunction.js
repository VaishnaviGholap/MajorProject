import axios from "axios";
import { USER_LOGIN } from "../Services/CustomerRoute";


export function UserLogin(userData){
    return(axios.post(USER_LOGIN,userData));
}
