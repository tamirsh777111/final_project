import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import ROUTES from "./ROUTES";
import AboutUsPage from "../pages/AboutUsPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import FavoritesPage from "../pages/FavoritesPage";
import SandboxPage from "../sandbox/SandboxPage";
import LifeCycleHooksPage from "../sandbox/LifeCycleHooksPage";
import ContextPage from "../sandbox/ContextPage";
import AuthGuard from "../guard/AuthGuard";
import CreateCardPage from "../pages/CreateCardPage/CreateCardPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutUsPage />} />

      <Route
        path={`${ROUTES.EDITCARD}/:id`}
        element={
          <AuthGuard>
            <EditCardPage />
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.CREATECARD}
        element={
          <AuthGuard>
            <CreateCardPage />
          </AuthGuard>
        }
      />

      <Route
        path="/favorites"
        element={
          <AuthGuard>
            <FavoritesPage />
          </AuthGuard>
        }
      />

      <Route path="/sandbox" element={<SandboxPage />}>
        <Route path="lch" element={<LifeCycleHooksPage />} />
      </Route>
      <Route path="/context" element={<ContextPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default Router;
