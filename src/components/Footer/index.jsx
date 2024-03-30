import styled from "@emotion/styled";
import { Col, Row } from "react-grid-system";
import { Logo } from "../Icons/Logo";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { WhatsappIcon } from "../Icons/WhatsappIcon";
import { TwitchIcon } from "../Icons/TwitchIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import Typography from "../Typography";

const FooterStyled = styled.footer`
  background: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.white};
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: inline-block;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Row align="center">
        <Col lg={8} md={8} sm={8}>
          <Logo width={176} height={40} />
          <Typography component="subtitle" variant="subtitle">
            Desenvolvido por Alura. Projeto fictício sem fins comerciais.
          </Typography>
        </Col>
        <Col lg={4} md={4} sm={4} style={{ textAlign: "right" }}>
          <Typography component="subtitle" variant="subtitle">
            Acesse nossas redes:
          </Typography>
          <List>
            <ListItem>
              <a href="/" aria-label="Link para o WhatsApp">
                <WhatsappIcon />
              </a>
            </ListItem>
            <ListItem>
              <a href="/" aria-label="Link para a Twitch">
                <TwitchIcon />
              </a>
            </ListItem>
            <ListItem>
              <a href="/" aria-label="Link para o Instagram">
                <InstagramIcon />
              </a>
            </ListItem>
            <ListItem>
              <a href="/" aria-label="Link para o Twitter">
                <TwitterIcon />
              </a>
            </ListItem>
          </List>
        </Col>
      </Row>
    </FooterStyled>
  );
};

export default Footer;
