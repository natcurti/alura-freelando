/* eslint-disable react/prop-types */
import Typography from "../Typography";

const CardHeader = ({ title, subtitle, variant, component }) => {
  return (
    <>
      <Typography variant="h1" component="h1">
        {title}
      </Typography>
      <Typography variant={variant} component={component}>
        {subtitle}
      </Typography>
    </>
  );
};

export default CardHeader;
