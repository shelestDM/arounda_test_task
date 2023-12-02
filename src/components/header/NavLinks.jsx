const NavLinks = () => {
  let navLinksArr = ["Advertise", "Blog", " Unsplash+"];
  let basicClasses = 'text-[14px] font-medium leading-[1.4285714286] text-[#767676] hover:text-black duration-500';
  let classesWithGradientText = 'text-[14px] font-medium leading-[1.4285714286] text-[#767676] hover:text-black duration-500 gradient_text';

  return (
    <div className="px-4 flex ">
      <ul className="flex gap-6 items-center ">
        {navLinksArr.map((link,index) => (
          <li key={link}> 
            <a
              href=""
              className={index===2 ? classesWithGradientText : basicClasses }
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
