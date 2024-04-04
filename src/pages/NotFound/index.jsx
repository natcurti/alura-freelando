import { Col, Container, Row } from "react-grid-system";
import LayoutBase from "../LayoutBase";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import imageNotFound from "./assets/not-found-image.png";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ImgStyled = styled.img`
  width: 450px;
`;

const ContainerText = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.neutral.a};
`;

const ContainerRow = styled.div`
  @media (min-width: 992px) {
    width: 675px;
  }
`;

const NotFound = () => {
  return (
    <LayoutBase>
      <Container
        style={{ marginTop: "80px", marginBottom: "8px", textAlign: "center" }}
      >
        <Card>
          <ContainerRow>
            <Row justify="center">
              <Col>
                <ContainerText>
                  <Typography variant="h2" component="h1">
                    Ops... Página não encontrada :(
                  </Typography>
                </ContainerText>
                <ImgStyled
                  src={imageNotFound}
                  alt="Imagem representando o erro 404. Fundo verde com número escrito em tons claros. O zero é representado por um emoji sorrindo"
                />
                <ContainerText>
                  <Typography variant="body" component="body">
                    Não encontramos a página que você está buscando, mas temos
                    muitas outras para você navegar!
                  </Typography>
                </ContainerText>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button variant="secondary">Voltar para home</Button>
                </Link>
              </Col>
            </Row>
          </ContainerRow>
        </Card>
      </Container>
    </LayoutBase>
  );
};

export default NotFound;
