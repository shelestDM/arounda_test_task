import SearchForm from './header/SearchForm';
import NavLinks from './header/NavLinks';
import BurgerMenu from './header/BurgerMenu';
import Logo from './header/Logo';

const Header = () => {
    return ( 
        <header className="sticky top-0 z-10">
            <nav className="h-[62px] py-[11px] px-5 bg-white flex gap-4 items-center">
                <Logo/>
                <SearchForm/>
                <NavLinks/>
               <div className='flex items-center'>
                    <button className='rounded-[4px] bg-[#fff] text-[#767676] border border-[#d1d1d1] hover:border-black  hover:text-black duration-500  h-8 leading-[30px] px-[11px] text-center text-[14px] font-medium'>
                        Submit a photo
                    </button>
               </div>
               <button type="button" className='h-full py-[3px] px-[4px] flex items-center fill-[#767676] hover:fill-black duration-500'>
                <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" aria-hidden="false">
                    <desc lang="en-US">Bell</desc>
                    <path d="M14.345 21.15c-4.637 1.604-8.871.902-9.778-1.805-.303-1.002-.202-2.005.403-3.108.302-.5.302-1.303.1-1.905l-.705-2.306c-.605-1.604-.403-3.308.202-4.712.403-1.102 1.109-1.904 2.117-2.606l-.202-.602c-.302-.601.1-1.403.706-1.604l1.21-.401c.705-.3 1.41.1 1.612.802l.202.602c1.31-.1 2.52.2 3.629.902 1.21.802 2.117 1.905 2.62 3.409l.807 2.506c.202.501.706 1.203 1.31 1.404 1.11.4 1.916 1.103 2.218 2.105 1.008 2.507-1.814 5.715-6.451 7.319Zm4.536-6.717c-.403-1.103-3.226-1.705-7.056-.401-3.83 1.303-5.645 3.609-5.242 4.712.403 1.103 3.226 1.704 7.056.4 3.83-1.302 5.645-3.608 5.242-4.711Zm-7.56 4.11c-1.008 0-1.815-.501-2.42-1.203-.1-.1-.1-.3 0-.4.706-.602 1.714-1.204 3.327-1.806.605-.2 1.21-.4 1.814-.5.202 0 .303.1.303.2v.501c0 1.203-.706 2.306-1.714 2.807.1 0-.706.401-1.31.401Z">
                    </path>
                    </svg>
                </button>
                <img class="rounded-[50%] w-[32px] h-[32px]" loading="lazy" srcset="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&amp;crop=faces&amp;dpr=1&amp;h=32&amp;w=32&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3 1x, https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&amp;crop=faces&amp;dpr=2&amp;h=32&amp;w=32&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3 2x" src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&amp;crop=faces&amp;h=32&amp;w=32&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3" role="presentation" alt="Avatar of user Dmitriy Bartashevich" width="32px" height="32px"/>
                <BurgerMenu/>
            </nav>
        </header>
     );
}
 
export default Header;