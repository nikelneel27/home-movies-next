import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const createUser = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password).then(() => {
        navigate("/dashboard/main");
      });
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <MainContainer>
      <Container>
        <WelcomeSection>Welcome!</WelcomeSection>
        <LoginSection>
          <DivWrapper>
            <Label>Email</Label>
            <Input
              type="text"
              required
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </DivWrapper>
          <DivWrapper>
            <Label>Password</Label>
            <Input
              type="password"
              required
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </DivWrapper>
          {errorMessage && (
            <TextWrapper color={"red"}>*{errorMessage}</TextWrapper>
          )}
          <Button onClick={() => createUser(email, password)}>Sign Up</Button>
        </LoginSection>
        <NewUserSection>
          New user? <Link to="/">Log In</Link>
        </NewUserSection>
      </Container>
    </MainContainer>
  );
}

export default SignUp;
