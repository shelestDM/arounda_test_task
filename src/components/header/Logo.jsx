import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import logo from '../../assets/header/unsplash_logo.svg';

const Logo = () => {
  return (
    <NavLink
      to="/"
      className="w-[32px] h-10 flex items-center shrink-0"
    >
      <img src={logo} alt="unsplash_logo" width="32px" height="32px"></img>
    </NavLink>
  );
};

export default Logo;
