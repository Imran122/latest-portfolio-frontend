import DashboardLayout from "@/DashboardLayout/DashboardLayout";
import "@/styles/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 900, // Animation duration (in milliseconds)
      delay: 300, // Delay between elements animations (in milliseconds)
      offset: 100, // Offset (in pixels) from the original trigger point
      easing: "ease-in-out",
    });
  }, []);
  const router = useRouter();
  const isDashboardPage = router.pathname.startsWith("/dashboard");

  return isDashboardPage ? (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  ) : (
    <Component {...pageProps} />
  );
}
