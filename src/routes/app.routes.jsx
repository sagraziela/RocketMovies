import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";
import { NewMovie } from "../pages/NewMovie";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/details/:id" element={ <Details /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/new-movie" element={ <NewMovie /> } />
        </Routes>
    )
}