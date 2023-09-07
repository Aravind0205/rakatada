import NavbarComponent from '../components/NavbarComponent'
import Footer from "../components/Footer";
import GoogleTranslate from "../components/GoogleWrapper";

export default function Layout({children}) {
    return (
        <>
            <NavbarComponent/>
            <GoogleTranslate/>
                <main>{children}</main>
            <Footer/>
        </>
    )
}
