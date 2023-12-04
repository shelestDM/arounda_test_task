import { useState } from "react";
import CustomRoutes from "./Routes";
import Header from "./components/Header";
import SignUpPage from "./components/sign_up_form/SignUpForm";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom";

function App() {

  let [isUserLoggedIn, SetIsUserLoggedIn] = useState(!!localStorage.getItem('isUserLoggedIn'));

  console.log(isUserLoggedIn);

  const SignUpUser = () =>{
    SetIsUserLoggedIn(true);
  }
  return (
    <>
      {isUserLoggedIn 
      ? 
        <div>
          <Header />
          <CustomRoutes />
        </div>
       : 
        <SignUpPage SignUpUser={SignUpUser} />
      }
    </>
  );
}

export default App;
