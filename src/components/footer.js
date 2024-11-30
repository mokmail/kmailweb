
import { useCookies } from "react-cookie";
const Footer = () => {
const [cookies, setCookie, removeCookie] = useCookies();





    return (
        <footer className={`flex flex-col m-auto  bottom-0  w-full text-center h-48 items-center justify-center text-slate-100 text-sm`} >
        <p>Designed and developed by Mohammed Kmail | Vienna, Austria | Get in touch: <a href="mailto://kmail@kmail.at">kmail@kmail.at</a></p>
        </footer>
    );
    }
    export default Footer;