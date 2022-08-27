import React, { useState, useEffect } from "react";
import Link from "next/link";
import { auth } from "../../firebase";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  // useEffect(() => {
  //   const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  //   isLoggedIn && navigate("/dashboard/main");
  // }, []);

  const loginUser = async (email: string, password: string) => {
    console.log("222", email, password);
    try {
      await auth.signInWithEmailAndPassword(email, password).then(() => {
        // localStorage.setItem("loggedIn", rememberMe);
        router.push("/");
      });
    } catch (err) {
      // setErrorMessage(err.message);
      console.log(errorMessage);
    }
  };

  const forgotPassword = () => {
    router.push("/forgot-password");
  };

  const rememberMeClick = (e: any) => {
    const checked = e.target.checked;
    setRememberMe(checked);
  };

  return (
    <div>
      <div>
        <div>Welcome!</div>
        <div>
          <div>
            <label>Email</label>
            <input
              className="text-black"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="text-black"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div onClick={() => forgotPassword()}>Forgot our password?</div>
          <div>
            <input type="checkbox" onClick={(e) => rememberMeClick(e)} />
            Remember me next time
          </div>
          {errorMessage && <div color={"red"}>*{errorMessage}</div>}
          <button onClick={() => loginUser(email, password)}>Log in</button>
        </div>
        <div>
          New user? <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
function Bool(checked: any): React.SetStateAction<boolean> {
  throw new Error("Function not implemented.");
}
