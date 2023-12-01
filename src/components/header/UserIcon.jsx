const UserIcon = () => {
  return (
    <img
      class="rounded-[50%] w-[32px] h-[32px]"
      loading="lazy"
      srcset="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&amp;crop=faces&amp;dpr=1&amp;h=32&amp;w=32&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3 1x, https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&amp;crop=faces&amp;dpr=2&amp;h=32&amp;w=32&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3 2x"
      src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&amp;crop=faces&amp;h=32&amp;w=32&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3"
      role="presentation"
      alt="Avatar of user Dmitriy Bartashevich"
      width="32px"
      height="32px"
    />
  );
};

export default UserIcon;
