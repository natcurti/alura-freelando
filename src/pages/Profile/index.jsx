import BannerProfile from "./BannerProfile";
import Card from "../../components/Card";
import Typography from "../../components/Typography";
import userImage from "./assets/user-profile.png";
import styled from "@emotion/styled";
import { Container } from "react-grid-system";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useEffect } from "react";
import http from "../../http";

const ContainerUser = styled.section`
  color: ${(props) => props.theme.colors.neutral.a};
  text-align: center;
`;

const ContainerForm = styled.form`
  color: ${(props) => props.theme.colors.neutral.a};
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  @media (min-width: 992px) {
    width: 60%;
  }
`;

const ContainerInputsRow = styled.div`
  display: flex;
  width: 100%;
  gap: ${(props) => props.theme.spacing.m};
`;

const ImgStyled = styled.img`
  width: 100px;
  height: 100px;
`;

const Profile = () => {
  useEffect(() => {
    http
      .get("profile")
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <BannerProfile />
      <Container
        style={{
          marginTop: "80px",
          marginBottom: "80px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "32px",
          width: "100vw",
        }}
      >
        <ContainerUser>
          <Card>
            <Typography variant="h3" component="h2">
              João Marques da Silva
            </Typography>
            <ImgStyled src={userImage} />
          </Card>
        </ContainerUser>
        <ContainerForm>
          <Typography variant="h2" component="h2">
            Revise seus dados
          </Typography>
          <TextField typeOfInput="text" title="Nome" />
          <TextField typeOfInput="text" title="Sobrenome" />
          <ContainerInputsRow>
            <TextField typeOfInput="text" title="Celular" />
            <TextField typeOfInput="email" title="Email" />
          </ContainerInputsRow>
          <ContainerInputsRow>
            <TextField typeOfInput="text" title="Código Postal" />
            <TextField typeOfInput="text" title="País" />
          </ContainerInputsRow>
          <Button>Salvar</Button>
        </ContainerForm>
      </Container>
    </>
  );
};

export default Profile;
