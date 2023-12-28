import "./index.css";
import React, { Suspense } from "react";
import { Header } from "./components/header";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { ProtectedRoutingWrapper } from "./components/hoc/routing/protected.routes";
import { useSubscribeToNavigationEvents } from "./hooks/mfe-events/useSubscribeToNavigation";
import { usePublishNavigationEvents } from "./hooks/mfe-events/usePublishNavigationEvent";
import { useAuthSubscriber } from "./hooks/mfe-events/auth/useAuthSubscriber";
import { useAuthState } from "./contexts/auth/selectors";
import { useSyncAuthStateWithLocalStorage } from "./hooks/mfe-events/auth/useSyncAuthWithLocalStorage";

const AuthPage = React.lazy(() => import("./pages/auth"));
const EventsPage = React.lazy(() => import("./pages/events"));
const ProfilePage = React.lazy(() => import("./pages/profile"));

export const App = () => {
  const authState = useAuthState()[0];

  useSyncAuthStateWithLocalStorage();
  usePublishNavigationEvents();
  useSubscribeToNavigationEvents();
  useAuthSubscriber();

  return (
    <Routes>
      <Route
        element={
          <div>
            <Header />
            <Outlet />
          </div>
        }
      >
        <Route
          path='/auth/*'
          element={
            authState.loggedIn ? (
              <Navigate to='/events' />
            ) : (
              <Suspense fallback={<h1>loading Auth Page</h1>}>
                <AuthPage />
              </Suspense>
            )
          }
        />
        <Route
          path='/events/*'
          element={
            <Suspense fallback={<h1>loading Events Page</h1>}>
              <ProtectedRoutingWrapper>
                <EventsPage />
              </ProtectedRoutingWrapper>
            </Suspense>
          }
        />
        <Route
          path='/profile/:uid'
          element={
            <Suspense fallback={<h1>loading user profile Page</h1>}>
              <ProtectedRoutingWrapper>
                <ProfilePage />
              </ProtectedRoutingWrapper>
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
