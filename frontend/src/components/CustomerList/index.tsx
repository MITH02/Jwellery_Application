"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomerCard from "@/components/CustomerCard";
import {
  Grid,
  SearchContainer,
  SearchInput,
  AddButton,
  EmptyState,
  LoadingGrid,
  LoadingCard,
} from "./style";

interface Customer {
  id: string;
  name: string;
  phone: string;
  address: string;
  photoUrl?: string | null;
  idType: string;
  idNumber: string;
  pledges: any[];
}

interface CustomerListProps {
  customers: Customer[];
  baseUrl: string;
  isLoading?: boolean;
}

export default function CustomerList({ customers, baseUrl, isLoading }: CustomerListProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm) ||
      customer.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <LoadingGrid>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <LoadingCard key={n} />
        ))}
      </LoadingGrid>
    );
  }

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AddButton onClick={() => router.push("/customers/new")}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M10 4v12m-6-6h12" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Add Customer
        </AddButton>
      </SearchContainer>

      {filteredCustomers.length === 0 ? (
        <EmptyState>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
          </svg>
          <p>No customers found</p>
        </EmptyState>
      ) : (
        <Grid>
          {filteredCustomers.map((customer) => (
            <CustomerCard key={customer.id} customer={customer} baseUrl={baseUrl} />
          ))}
        </Grid>
      )}
    </div>
  );
}