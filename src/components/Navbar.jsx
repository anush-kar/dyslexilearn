// src/components/Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

// Styled components
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;

  a {
    text-decoration: none;
    color: #555;
    font-weight: 500;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #4B0082;
    }

    &.active {
      color: #4B0082;
    }
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const LogoutIcon = styled.img`
  width: 24px;
  cursor: pointer;
`;

// Navbar Component
const Navbar = ({ activePage, profileImage, onLogout }) => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      {/* Logo */}
      <Logo onClick={() => navigate('/learn')} />

      {/* Navigation Links */}
      <NavLinks>
        <a href="/learn" className={activePage === 'Learn' ? 'active' : ''}>Learn</a>
        <a href="/progress" className={activePage === 'Progress' ? 'active' : ''}>Progress</a>
        <a href="/community" className={activePage === 'Community' ? 'active' : ''}>Community</a>
        <a href="/chat" className={activePage === 'Chat' ? 'active' : ''}>Chat</a>
        <a href="/consult" className={activePage === 'Consult' ? 'active' : ''}>Consult</a>
      </NavLinks>

      {/* Profile and Logout */}
      <ProfileSection>
        <ProfileImage src={profileImage} alt="Profile" />
        <LogoutIcon src="/src/assets/logout.svg" alt="Logout" onClick={onLogout} />
      </ProfileSection>
    </NavbarContainer>
  );
};

export default Navbar;
