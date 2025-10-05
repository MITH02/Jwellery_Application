"use client";

import styled from "@emotion/styled";

export const FormContainer = styled.div({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "24px",
  background: "#FFF",
  borderRadius: "16px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
});

export const FormHeader = styled.div({
  marginBottom: "32px",
  textAlign: "center",
});

export const Title = styled.h2({
  margin: 0,
  fontSize: "24px",
  fontWeight: 700,
  color: "var(--text-color)",
  marginBottom: "8px",
});

export const Subtitle = styled.p({
  margin: 0,
  color: "#666",
  fontSize: "14px",
});

export const Form = styled.form({
  display: "grid",
  gap: "24px",
});

export const FormGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "24px",
  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
  },
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
  display: "flex",
  alignItems: "center",
  gap: "4px",
  "& svg": {
    width: "16px",
    height: "16px",
    color: "#666",
  },
});

export const Input = styled.input({
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid var(--border-color)",
  fontSize: "16px",
  transition: "all 0.2s",
  "&:focus": {
    outline: "none",
    borderColor: "var(--primary-color)",
    boxShadow: "0 0 0 3px rgba(255, 107, 0, 0.1)",
  },
  "&:disabled": {
    background: "#f5f5f5",
    cursor: "not-allowed",
  },
});

export const TextArea = styled.textarea({
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid var(--border-color)",
  fontSize: "16px",
  minHeight: "100px",
  resize: "vertical",
  transition: "all 0.2s",
  "&:focus": {
    outline: "none",
    borderColor: "var(--primary-color)",
    boxShadow: "0 0 0 3px rgba(255, 107, 0, 0.1)",
  },
});

export const Select = styled.select({
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid var(--border-color)",
  fontSize: "16px",
  transition: "all 0.2s",
  "&:focus": {
    outline: "none",
    borderColor: "var(--primary-color)",
    boxShadow: "0 0 0 3px rgba(255, 107, 0, 0.1)",
  },
});

export const ImageUpload = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  padding: "24px",
  border: "2px dashed var(--border-color)",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.2s",
  "&:hover": {
    borderColor: "var(--primary-color)",
    background: "rgba(255, 107, 0, 0.02)",
  },
});

export const ImagePreview = styled.div({
  width: "200px",
  height: "200px",
  borderRadius: "8px",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const ButtonGroup = styled.div({
  display: "flex",
  gap: "16px",
  justifyContent: "flex-end",
  marginTop: "24px",
});

export const Button = styled.button<{ variant?: "primary" | "secondary" }>((props) => ({
  padding: "12px 24px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s",
  border: "none",
  ...(props.variant === "primary"
    ? {
        background: "var(--primary-color)",
        color: "#FFF",
        "&:hover": {
          background: "var(--secondary-color)",
        },
      }
    : {
        background: "#FFF",
        color: "var(--text-color)",
        border: "1px solid var(--border-color)",
        "&:hover": {
          background: "#f5f5f5",
        },
      }),
  "&:disabled": {
    opacity: 0.7,
    cursor: "not-allowed",
  },
}));

export const ErrorText = styled.span({
  color: "var(--error-color)",
  fontSize: "14px",
  marginTop: "4px",
});