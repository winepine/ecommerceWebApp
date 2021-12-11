import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage";
import PostAdminPage from "./components/PostAdminPage";
import CatNav from "./components/UserComps/CatNav";
function App() {
  return (
    //<CatNav />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/postSignin" element={<PostAdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
