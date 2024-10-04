import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { User } from "./pages/user";
import { Profile } from "./pages/profile";


function App() {
  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App;