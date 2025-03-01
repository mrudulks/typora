import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";

export const AuthLayout: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="h-screen relative bg-primary-light dark:bg-primary-dark">
      <Header />
      <main className="h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
