import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage";
import PostSignIn from "./components/postsignin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/postSignin" element={<PostSignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
