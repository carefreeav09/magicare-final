export const API_URL = "http://localhost:5000/";
export const JWT_TOKEN = 'mcis-token';
export const LOGGED_IN_USER = 'mcis-user';
export const USER_FULL_NAME = 'mcis-fullName';
export const USER_ID = 'mcis-user-id';
export const USER_ROLE = 'mcis-user-is-admin';
export const LANGUAGE_KEY = 'mcis-language';
export const PAGE_SIZE = 10;

let date = new Date();
let year = date.getFullYear();

const APP_CONFIG = {
    brand: 'Maha Chandeswori Information System',
    year: year,
};

export default APP_CONFIG;