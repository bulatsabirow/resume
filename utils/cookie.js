import Cookies from '../node_modules/js-cookie/dist/js.cookie';
export const cookiesExpirationDate = {expires: 7};
export const darkLightModeCookieName = "theme";

export function getCookie(key) {
    return Cookies.get(key);
}

export function setCookie(key, val) {
    return Cookies.set(key, val, cookiesExpirationDate);
}

export function deleteCookie(key) {
    return Cookies.remove(key);
}