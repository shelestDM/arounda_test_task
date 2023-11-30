import logo from '../assets/header/unsplash_logo.svg';
import search_icon from '../assets/header/search.svg';

const Header = () => {
    return ( 
        <header className="sticky top-0 z-10 border border-black">
            <nav className="h-[62px] p-[11px] bg-white flex border border-red-500">
                <a href="https://unsplash.com" target='_blank' className='w-[32px] h-10 flex items-center shrink-0'>
                    <img src={logo} alt="unsplash_logo" width="32px" height="32px"></img>
                </a>
                <div className='border border-gray ml-[14px] w-[807px] flex items-center bg-[#eee] h-10 text-[14px] leading-[1.428] rounded-3xl'>
                    <button className='w-[34px] h-[38px] pl-[14px] pointer'>
                        <img src={search_icon} className='' alt="search_icon" width="16px" height="16px"/>
                    </button>
                    <input type="text" placeholder='Search high-resolution images' className='pl-2.5 pb-[2px] grow text-[#111] focus:outline-none bg-[#eee]'/>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;