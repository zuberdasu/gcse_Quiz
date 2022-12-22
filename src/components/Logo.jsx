import websiteLogo from "../images/low-resolution-logo.png";

const Logo = () => {
  return (
    <img
      className="websiteLogo"
      src={websiteLogo}
      width="150"
      height="93"
      alt="Logo"
    ></img>
  );
};

export default Logo;
