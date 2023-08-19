import {getCookie, localeCookieName} from "../../utils/cookie";
import ru from './ru.json';
import en from './en.json'

export const defaultLocale = getCookie(localeCookieName) ?? 'en';

export const languages = {
    ru, en
};
