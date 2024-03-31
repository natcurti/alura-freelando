import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "react-grid-system";

const LayoutBase = () => {
  return (
    <>
      <Header />
      <Container style={{ margin: "80px auto" }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default LayoutBase;
