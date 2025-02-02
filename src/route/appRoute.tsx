import React from "react";
import { Routes, Route } from "react-router-dom";
import homePage from "../pages/home/homePage.tsx";
import LoginPage from "../pages/login/loginPage.tsx";
import ForgotPassword from "../pages/login/forgotPassword.tsx";
import SubscribePage from "../pages/subscribe/subscribePage.tsx";

const AppRoute: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} Component={homePage}/>
                <Route path={"/login"} Component={LoginPage}/>
                <Route path={"/register"} Component={SubscribePage}/>
                <Route path={"/forgot-password"} Component={ForgotPassword}/>
            </Routes>
        </>
    );
}

export default AppRoute;
