import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./About";

const RouterPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterPage;