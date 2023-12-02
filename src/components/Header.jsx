import SearchForm from './header/SearchForm';
import NavLinks from './header/NavLinks';
import BurgerMenu from './header/BurgerMenu';
import Logo from './header/Logo';
import UserIcon from './header/UserIcon';
import ActivityButton from './header/ActivityButton';
import SubmitPhotoBtn from './UI/Button';

const Header = () => {
    return ( 
        <header className="sticky top-0 z-10">
            <nav className="h-[62px] py-[11px] px-5 bg-white flex gap-4 items-center justify-between lg:justify-start">
                <Logo/>
                <SearchForm/>
                <div className='gap-4 hidden lg:flex'>
                    <NavLinks/>
                    <SubmitPhotoBtn title={"Submit photo"}/>
                    <ActivityButton/>
                    <UserIcon/>
                </div>
                <BurgerMenu/>
            </nav>
        </header>
     );
}
 
export default Header;