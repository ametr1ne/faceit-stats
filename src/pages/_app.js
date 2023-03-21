import { Header } from "@/components/Header";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>

      <Header />
      <Component {...pageProps} />
    </>
  );
}
