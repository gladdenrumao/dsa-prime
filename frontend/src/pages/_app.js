import "@/styles/globals.css";
import Footer from "@/components/Footer"; // Import Footer

export default function App({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
