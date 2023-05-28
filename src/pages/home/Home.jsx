import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Features from "../../components/features/Features";
import "./home.scss";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperty/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Features />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />

        <h1 className="homeTitle">Homes guest love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
