import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home.tsx";
import NotFound from "./containers/NotFound.tsx";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Finally, catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}