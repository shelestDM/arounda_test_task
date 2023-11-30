import logo from '../../assets/header/unsplash_logo.svg';

const Logo = () => {
  return (
    <a
      href="https://unsplash.com"
      target="_blank"
      className="w-[32px] h-10 flex items-center shrink-0"
    >
      <img src={logo} alt="unsplash_logo" width="32px" height="32px"></img>
    </a>
  );
};

export default Logo;
