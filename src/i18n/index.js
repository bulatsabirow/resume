import {getCookie, localeCookieName} from "../../utils/cookie";
import ru from './ru.json';
import en from './en.json'

export const defaultLocale = getCookie(localeCookieName) ?? 'ru';

export const languages = {
    ...ru, ...en
};
