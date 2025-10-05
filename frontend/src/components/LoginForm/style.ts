"use client";

import styled from "@emotion/styled";

export const LoginContainer = styled.div({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  background: "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)",
});

export const LoginCard = styled.div({
  width: "100%",
  maxWidth: "400px",
  background: "#FFF",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
  overflow: "hidden",
});

export const LoginHeader = styled.div({
  background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
  padding: "32px 24px",
  textAlign: "center",
  color: "#FFF",
});

export const Logo = styled.h1({
  margin: 0,
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: "8px",
});

export const Subtitle = styled.p({
  margin: 0,
  opacity: 0.9,
  fontSize: "14px",
});

export const LoginForm = styled.form({
  padding: "32px 24px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const FormField = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const Label = styled.label({
  fontSize: "14px",
  fontWeight: 500,
  color: "var(--text-color)",
});

export const Input = styled.input({
  padding: "12px 16px",
  border: "1px solid var(--border-color)",
  borderRadius: "8px",
  fontSize: "16px",
  transition: "all 0.2s",
  "&:focus": {
    outline: "none",
    borderColor: "var(--primary-color)",
    boxShadow: "0 0 0 3px rgba(255, 107, 0, 0.1)",
  },
});

export const SubmitButton = styled.button({
  background: "var(--primary-color)",
  color: "#FFF",
  border: "none",
  borderRadius: "8px",
  padding: "14px",
  fontSize: "16px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s",
  "&:hover": {
    background: "var(--secondary-color)",
  },
  "&:disabled": {
    opacity: 0.7,
    cursor: "not-allowed",
  },
});

export const ErrorMessage = styled.div({
  color: "var(--error-color)",
  fontSize: "14px",
  padding: "8px 12px",
  background: "rgba(255, 59, 48, 0.1)",
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});