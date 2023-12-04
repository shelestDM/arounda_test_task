import { NavLink } from "react-router-dom/cjs/react-router-dom";

const ImageTags = (props) => {

  let tags = props.tags;

  return (
    <ul className="flex gap-2 flex-wrap items-start justify-start pb-10">
      {tags.map((tag) => (
        <li key={tag.title} className="cursor-pointer rounded-[4px] bg-gray-100 text-[#767676] hover:border-black   hover:text-black hover:bg-gray-200 duration-500 h-8 leading-[30px] text-center text-[10px] sm:text-[14px] font-medium">
          <NavLink to={'/search/'+tag.title} className="h-full block px-[11px]">
            {tag.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ImageTags;
