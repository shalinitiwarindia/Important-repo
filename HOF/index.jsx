import React from "react";

// HOC function that takes a component and returns an enhanced component
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = true; // Simulate authentication check

    if (!isLoggedIn) {
      return <p>Please log in to access this page.</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

// Example Component
const Dashboard = () => {
  return <h2>Welcome to the Dashboard!</h2>;
};

// Wrapping Dashboard with HOC
const ProtectedDashboard = withAuth(Dashboard);

export default ProtectedDashboard;
