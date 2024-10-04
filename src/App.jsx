import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { User } from "./pages/user";
import { Profile } from "./pages/profile";
import { MainLayout } from "./layout/main-loyout/main-loyout";
import { UserDetail } from "./pages/user-detail";
import { ProfialLayout } from "./layout/profial-layout";
import { ChangeAdders } from "./pages/profial/change-adders";
import { CreateAddres } from "./pages/profial/create-addres";
import { ChangeProfile } from "./pages/profial/change-profial";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="profile" element={<ProfialLayout />}>
          <Route index element={<Profile />} />
          <Route path="chande-addres" element={<ChangeAdders />} />
          <Route path="create-addres" element={<CreateAddres />} />
          <Route path="change-profial" element={<ChangeProfile />} />
        </Route>
        <Route path="user/detail/:userId" element={<UserDetail />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Route>
    </Routes>
  );
}
export default App;
