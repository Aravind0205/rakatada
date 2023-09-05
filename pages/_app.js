// Styles
import '../scss/style.scss'
// React
import {useEffect} from 'react'
import Layout from "./layout";


function MyApp({Component, pageProps}) {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, []);

    return (
        <Layout>
            <main className={"app"}>
                <Component {...pageProps} />
            </main>
        </Layout>
    )
}

export default MyApp
