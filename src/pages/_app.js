import DashboardLayout from "@/DashboardLayout/DashboardLayout";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
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
