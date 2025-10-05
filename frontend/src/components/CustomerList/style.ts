"use client";

import styled from "@emotion/styled";

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "24px",
  padding: "24px 0",
});

export const SearchContainer = styled.div({
  display: "flex",
  gap: "16px",
  marginBottom: "24px",
});

export const SearchInput = styled.input({
  flex: 1,
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid var(--border-color)",
  fontSize: "16px",
  "&:focus": {
    outline: "none",
    borderColor: "var(--primary-color)",
    boxShadow: "0 0 0 3px rgba(255, 107, 0, 0.1)",
  },
});

export const AddButton = styled.button({
  background: "var(--primary-color)",
  color: "#FFF",
  border: "none",
  borderRadius: "8px",
  padding: "0 24px",
  fontSize: "16px",
  fontWeight: 600,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "background 0.2s",
  "&:hover": {
    background: "var(--secondary-color)",
  },
});

export const EmptyState = styled.div({
  textAlign: "center",
  padding: "48px 0",
  color: "#666",
  "& svg": {
    width: "48px",
    height: "48px",
    marginBottom: "16px",
    color: "var(--border-color)",
  },
});

export const LoadingGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "24px",
  padding: "24px 0",
});

export const LoadingCard = styled.div({
  height: "360px",
  background: "#f0f0f0",
  borderRadius: "12px",
  animation: "pulse 1.5s ease-in-out infinite",
  "@keyframes pulse": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0.5,
    },
    "100%": {
      opacity: 1,
    },
  },
});