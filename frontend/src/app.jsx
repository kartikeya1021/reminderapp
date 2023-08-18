import { useEffect, useState } from "preact/hooks";
import "./app.css";
import Login from "./pages/authentication/login";
import Reminders from "./pages/home/reminders";

export function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    let localUser = localStorage.getItem("user");
    if (localUser) {
      setIsUserLoggedIn(true);
    }
  }, []);
  return isUserLoggedIn ? <Reminders/> : <Login />;
}
