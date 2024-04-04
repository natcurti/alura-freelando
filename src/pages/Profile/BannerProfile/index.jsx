import styled from "@emotion/styled";
import Typography from "../../../components/Typography";

const BannerContainer = styled.section`
  width: 100%;
  height: 246px;
  background-image: url("../src/pages/Profile/assets/profile-banner.png");
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.neutral.a};
`;

const BannerProfile = () => {
  return (
    <BannerContainer>
      <Typography variant="h1" component="h1">
        Meu perfil
      </Typography>
    </BannerContainer>
  );
};

export default BannerProfile;
