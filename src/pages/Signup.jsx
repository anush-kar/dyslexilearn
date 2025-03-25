// src/components/Login.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  width: 400px;
  margin: 80px auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h2`
  color: #4B0082;
  margin-bottom: 24px;
`;

const GoogleButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  color: #555;
  font-size: 14px;
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  &:hover {
    background-color: #f5f5f5;
  }

  img {
    width: 20px;
    margin-right: 8px;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;

  span {
    color: #999;
    font-size: 12px;
    margin: 0 12px;
  }

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #ccc;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  margin-bottom: 8px;
  color: #555;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const PasswordInput = styled(Input)`
  padding-right: 40px;
`;

const EyeIcon = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  color: #777;
`;

const Link = styled.a`
  color: #4B0082;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 24px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: #4B0082;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3a0066;
  }
`;

const SmallText = styled.p`
  font-size: 14px;
  margin-top: 16px;
  color: #555;
`;

// Component
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <Heading>Sign up</Heading>

      {/* Google Sign-in Button */}
      <GoogleButton>
        <img src="src\assets\google-icon.svg" alt="Google Logo" />
        Sign up with Google
      </GoogleButton>

      {/* Divider */}
      <Divider>
        <span>OR</span>
      </Divider>

      {/* Form */}
      <Form>
        <Label>Email</Label>
        <Input type="email" placeholder="yourname@company.com" required />

        <Label>Password</Label>
        <PasswordWrapper>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            required
          />
          <EyeIcon onClick={() => setShowPassword((prev) => !prev)}>
            <span className="material-icons">
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </EyeIcon>
        </PasswordWrapper>

        <Label>Confirm Password</Label>
        <PasswordWrapper>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            required
          />
          <EyeIcon onClick={() => setShowPassword((prev) => !prev)}>
            <span className="material-icons">
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </EyeIcon>
        </PasswordWrapper>

        {/* Submit Button */}
        <Button type="submit">Log in</Button>
      </Form>

      {/* Login Link */}
      <SmallText>Already have an account? <Link href="#">Login</Link></SmallText>
    </Container>
  );
};

export default Login;
