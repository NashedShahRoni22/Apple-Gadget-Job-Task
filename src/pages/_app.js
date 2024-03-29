import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import store from "../redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
