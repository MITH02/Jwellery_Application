"use client";

import styled from "@emotion/styled";

export const Card = styled.div({
  background: "#FFF",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
  },
});

export const Header = styled.div({
  background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
  padding: "20px",
  color: "#FFF",
});

export const HeaderAmount = styled.div({
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const InterestBadge = styled.span({
  fontSize: "14px",
  padding: "4px 8px",
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.2)",
  fontWeight: 500,
});

export const Content = styled.div({
  padding: "20px",
});

export const ItemDetails = styled.div({
  display: "flex",
  gap: "16px",
  marginBottom: "20px",
  padding: "16px",
  background: "var(--background-color)",
  borderRadius: "12px",
});

export const ItemImage = styled.div({
  width: "80px",
  height: "80px",
  borderRadius: "8px",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const ItemInfo = styled.div({
  flex: 1,
});

export const ItemType = styled.div({
  fontWeight: 600,
  marginBottom: "4px",
});

export const ItemSpecs = styled.div({
  fontSize: "14px",
  color: "#666",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
});

export const InfoItem = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const Label = styled.span({
  fontSize: "12px",
  color: "#666",
});

export const Value = styled.span({
  fontSize: "14px",
  fontWeight: 500,
});

export const Status = styled.div<{ status: 'ACTIVE' | 'RETURNED' | 'DEFAULTED' }>((props) => ({
  padding: "8px 12px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: 600,
  textAlign: "center",
  marginTop: "16px",
  ...(props.status === 'ACTIVE' && {
    background: "rgba(52, 199, 89, 0.1)",
    color: "var(--success-color)",
  }),
  ...(props.status === 'RETURNED' && {
    background: "rgba(48, 209, 88, 0.1)",
    color: "#248A3D",
  }),
  ...(props.status === 'DEFAULTED' && {
    background: "rgba(255, 59, 48, 0.1)",
    color: "var(--error-color)",
  }),
}));

export const DueInfo = styled.div({
  marginTop: "16px",
  padding: "16px",
  background: "rgba(255, 59, 48, 0.05)",
  borderRadius: "12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const DueAmount = styled.div({
  fontSize: "18px",
  fontWeight: 600,
  color: "var(--error-color)",
});

export const DueDate = styled.div({
  fontSize: "14px",
  color: "#666",
});