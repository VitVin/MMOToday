import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { PCGamesPage } from "../pages/PCGamesPage/PCGamesPage";
import { BrowserGamesPage } from "../pages/BrowserGamesPage/BrowserGamesPage";
import { SearchGamesPage } from "../pages/SearchGamesPage/SearchGamesPage";
import { SpecificGamePage } from "../pages/SpecificGamePage/SpecificGamePage";
import { NavBar } from "../components/UI/NavBar/NavBar";


export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/Home" element={<HomePage />} />
                <Route path="/PCGames" element={<PCGamesPage />} />
                <Route path="/BrowserGames" element={<BrowserGamesPage />} />
                <Route path="/Search" element={<SearchGamesPage />} />
                <Route path="/Game/:id" element={<SpecificGamePage />} />
                <Route path="*" element={<Navigate replace to="/Home" />} />
            </Routes>

        </BrowserRouter>
    );
}

