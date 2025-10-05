"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  ImageContainer,
  CustomerImage,
  CardContent,
  Name,
  InfoList,
  InfoItem,
  Badge,
} from "./style";

interface CustomerCardProps {
  customer: {
    id: string;
    name: string;
    phone: string;
    address: string;
    photoUrl?: string | null;
    idType: string;
    idNumber: string;
    pledges: any[];
  };
  baseUrl: string;
}

export default function CustomerCard({ customer, baseUrl }: CustomerCardProps) {
  const router = useRouter();

  return (
    <Card onClick={() => router.push(`/customers/${customer.id}`)}>
      <ImageContainer>
        {customer.photoUrl ? (
          <CustomerImage
            src={`${baseUrl}${customer.photoUrl}`}
            alt={customer.name}
            loading="lazy"
          />
        ) : (
          <div style={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)",
            color: "#FFF",
            fontSize: "32px",
            fontWeight: "bold"
          }}>
            {customer.name[0].toUpperCase()}
          </div>
        )}
      </ImageContainer>
      <CardContent>
        <Name>{customer.name}</Name>
        <InfoList>
          <InfoItem>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            {customer.phone}
          </InfoItem>
          <InfoItem>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {customer.address}
          </InfoItem>
          <Badge>
            {customer.pledges.length} Active Pledge{customer.pledges.length !== 1 ? "s" : ""}
          </Badge>
        </InfoList>
      </CardContent>
    </Card>
  );
}