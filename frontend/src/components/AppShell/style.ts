"use client";

import styled from "@emotion/styled";

export const HeaderBar = styled.header({
  position: "sticky",
  top: 0,
  zIndex: 100,
  backgroundColor: "#FFF",
  borderBottom: "1px solid var(--border-color)",
  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
});

export const HeaderContent = styled.div({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 16px",
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Logo = styled.div({
  fontSize: "24px",
  fontWeight: 700,
  color: "var(--primary-color)",
  cursor: "pointer",
  transition: "color 0.2s",
  "&:hover": {
    color: "var(--secondary-color)",
  },
});

export const Navigation = styled.nav({
  display: "flex",
  gap: "24px",
  alignItems: "center",
});

export const NavLink = styled.a<{ active?: boolean }>(({ active }) => ({
  color: active ? "var(--primary-color)" : "var(--text-color)",
  textDecoration: "none",
  fontWeight: active ? 600 : 500,
  fontSize: "16px",
  padding: "8px 0",
  borderBottom: active ? "2px solid var(--primary-color)" : "2px solid transparent",
  transition: "all 0.2s",
  "&:hover": {
    color: "var(--primary-color)",
    borderBottomColor: "var(--primary-color)",
  },
}));

export const MainContent = styled.main({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "24px 16px",
  minHeight: "calc(100vh - 64px)",
});