import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <Navbar />
      <div className="w-9/12 m-auto mt-8">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
