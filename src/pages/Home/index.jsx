import AdvantagesCustomer from "../../components/AdvantagesCustomer";
import AdvantagesFreelas from "../../components/AdvantagesFreelas";
import Banner from "../../components/Banner";
import styled from "@emotion/styled";
import Skills from "../../components/Skills";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
`;

function Home() {
  return (
    <SectionContainer>
      <Banner />
      <AdvantagesCustomer />
      <AdvantagesFreelas />
      <Skills />
    </SectionContainer>
  );
}

export default Home;
