import '../styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'



function MyApp({ Component, pageProps }) {

  return(
 <div className="bg-indigo-600">
   <div className="sticky flex flex-col col-span-9 text-center bg-transparent rounded">
   <Navbar  />
   </div>
   
    <Component {...pageProps} />
    <div className="float-bottom">
    <Footer/>
    </div>
   
</div>

    )
}

export default MyApp
