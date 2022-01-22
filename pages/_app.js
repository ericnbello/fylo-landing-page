import '../styles/globals.css'
import Nav from '../components/common/nav';
import Footer from '../components/common/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
       <Component {...pageProps} />
       <Footer />
    </>
  )
}

export default MyApp
