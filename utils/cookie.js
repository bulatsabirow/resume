const cookiesExpirationDate = {expires: 7};

function getCookie(key) {
    return Cookies.get(key);
}

function setCookie(key, val) {
    return Cookies.set(key, val, cookiesExpirationDate);
}

function deleteCookie(key) {
    return Cookies.remove(key);
}