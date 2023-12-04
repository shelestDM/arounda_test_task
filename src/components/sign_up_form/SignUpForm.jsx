import { useState } from "react";
import Button from "../UI/Button";

const SignUpForm = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  let [userName, setUserName] = useState('');
  let [userPassword, SetUserPassword] = useState('');


  const onClickHandler = () => {
    let isUserLoggined = {userName, userPassword};
    localStorage.setItem('isUserLoggedIn',JSON.stringify(isUserLoggined));
    props.SignUpUser();
    clearInputs();
  }

  const clearInputs = () => {
    setUserName('');
    SetUserPassword('');
  }

  const onChangeNameHandler = (e) => {
    setUserName(e.target.value)
  }

  const onChangePasswordHandler = (e) => {
    SetUserPassword(e.target.value)
  }

  const disableBtnCondition = userName.length && userPassword.length;

  return (
    <>
    <h1 className="text-center text-2xl my-10 animate-pulse  text-gray-500">
        To see my work, you need Sign up firs :)
    </h1>
    <form
      onSubmit={onSubmitHandler}
      className="w-11/12 mx-auto shadow-xl md:w-1/2 p-10 md:p-10 md:py-20 flex flex-col gap-10 items-center mt-10 border border-gray-200 rounded-xl"
    >
      <input
        value={userName}
        onChange={onChangeNameHandler}
        type="text"
        name="user_name"
        id="user_name"
        placeholder="Enter your name or nickname"
        className="focus:shadow-2xl fucus:bg-gray-100 focus:border-gray-700 border border-transparent duration-500 h-10 px-5 w-full md:w-8/12 rounded-3xl grow text-[#111] outline-none focus:outline-none bg-[#eee]"
      />
      <input
        value={userPassword}
        onChange={onChangePasswordHandler}
        type="password"
        name="user_password"
        id="user_password"
        placeholder="Enter your password"
        className="focus:shadow-2xl fucus:bg-gray-100 focus:border-gray-700 border border-transparent duration-500 h-10 px-5 w-full md:w-8/12 rounded-3xl grow text-[#111] outline-none focus:outline-none bg-[#eee]"
      />
      <Button
        disabled={!disableBtnCondition}
        title="Sign up"
        onClickHandler={onClickHandler}
      />
    </form>
    </>
  );
};

export default SignUpForm;
