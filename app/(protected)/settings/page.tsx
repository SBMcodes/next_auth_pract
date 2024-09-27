import { auth, signOut } from "@/auth";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/auth/login" });
        }}
      >
        <button
          className="bg-red-500 text-white rounded-sm px-2 py-2 m-2 text-sm active:bg-red-500/90 transition select-none"
          type="submit"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
