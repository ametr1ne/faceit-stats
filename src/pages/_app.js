import { Header } from "@/components/Header";
import { Loader } from "@/components/Loader";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>

      {loading && <Loader />}
      <Header />
      <Component {...pageProps} />
    </>
  );
}
