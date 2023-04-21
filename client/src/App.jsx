import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Layout } from "./components";
import { Create, Home, Login, PostPage, Register } from "./pages";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
