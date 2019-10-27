import jwtDecode from 'jwt-decode';
import {getLocalStorage} from "./storageUtil";

export let isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
  } catch (e) {
    return false;
  }
};

export let decodeUsername = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.sub;
  } catch (e) {
    return null;
  }
};

export let getToken = () => {
  return getLocalStorage('mcis-token');
};

export let isLoggedIn = () => {
  return !!getToken();
};

export let userRole = () => {
  return getLocalStorage('mcis-user-is-admin');
};


export let isAdmin = () =>{
  return !!userRole();
};