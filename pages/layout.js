import NavbarComponent from '../components/NavbarComponent'
import Footer from "../components/Footer";

export default function Layout({ children }) {
    return (
        <>
            <NavbarComponent />
            <main>{children}</main>
            <Footer/>
        </>
    )
}
