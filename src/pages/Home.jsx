import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("helmet.home.title")}</title>
        <link rel="canonical" href="https://www.pellesautomotive.net/" />
        <meta name="description" content={t("helmet.home.description")} />
        <meta property="og:title" content={t("helmet.home.ogTitle")} />
        <meta
          property="og:description"
          content={t("helmet.home.ogDescription")}
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://pellesautomotive.net/" />
      </Helmet>

      <Hero />
      <AboutUs />
    </>
  );
};

export default Home;
