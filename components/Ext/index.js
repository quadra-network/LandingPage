import React from "react";
import { useMoralis } from "react-moralis";

export default function Ext() {
  const { authenticate, isAuthenticated, user, logout, isAuthenticating } =
    useMoralis();
  if (!isAuthenticated) {
    return (
      <div>
        <button
          onClick={async () => {
            await authenticate();
            chrome.tabs.sendMessage(
              tabs[0].id,
              { msg: "auth done" },
              (response) => {
                console.log(response);
              }
            );
          }}
        >
          Authenticate
        </button>

        <button
          onClick={() => {
            localStorage.clear();
            logout();
          }}
          disabled={isAuthenticating}
        >
          logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {user.get("username")}</h1>
      <button
        onClick={() => {
          localStorage.clear();
          logout();
        }}
        disabled={isAuthenticating}
      >
        logout
      </button>
    </div>
  );
}
