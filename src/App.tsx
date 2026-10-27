import { SignedIn, SignedOut, SignIn, SignOutButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        fontFamily: "system-ui, sans-serif",
      }}>
      <SignedOut>
        <h1>Password Manger Demo</h1>
        <SignIn routing="hash" />
      </SignedOut>

      <SignedIn>
        <h1>You're in 🎉</h1>
        <SignOutButton></SignOutButton>
        <UserButton />
      </SignedIn>
    </main>
  );
}
