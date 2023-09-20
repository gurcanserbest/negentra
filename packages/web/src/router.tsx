import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Index } from "./pages";
import { Mint } from './pages/mint';
import { routes } from "./routes";
import PrivacyPolicy from "./pages/privacy-policy";
import CookiePolicy from "./pages/Cookie-policy";
import ClarificationText from "./pages/clarification-text";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Index />} />
        <Route path={routes.mint} element={<Mint />} />
        <Route path={routes.privacyPolicy} element={<PrivacyPolicy />} />
        <Route path={routes.cookiePolicy} element={<CookiePolicy />} />
        <Route path={routes.clarificationText} element={<ClarificationText />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Router;
