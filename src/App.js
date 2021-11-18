import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostSignIn from "./components/postsignin";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/postSignin" element={<PostSignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
