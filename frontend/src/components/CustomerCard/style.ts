"use client";

import styled from "@emotion/styled";

export const Card = styled.div({
  background: "#FFF",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
  },
});

export const ImageContainer = styled.div({
  position: "relative",
  width: "100%",
  paddingTop: "75%", // 4:3 aspect ratio
  background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
  overflow: "hidden",
});

export const CustomerImage = styled.img({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const CardContent = styled.div({
  padding: "16px",
});

export const Name = styled.h3({
  margin: 0,
  fontSize: "18px",
  fontWeight: 600,
  color: "var(--text-color)",
  marginBottom: "8px",
});

export const InfoList = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const InfoItem = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  color: "#666",
  "& svg": {
    width: "16px",
    height: "16px",
    color: "var(--primary-color)",
  },
});

export const Badge = styled.span({
  display: "inline-flex",
  alignItems: "center",
  padding: "4px 8px",
  borderRadius: "12px",
  fontSize: "12px",
  fontWeight: 500,
  background: "rgba(255, 107, 0, 0.1)",
  color: "var(--primary-color)",
});