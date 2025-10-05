"use client";

import React from 'react';
import Image from 'next/image';
import {
  Card,
  Header,
  HeaderAmount,
  InterestBadge,
  Content,
  ItemDetails,
  ItemImage,
  ItemInfo,
  ItemType,
  ItemSpecs,
  Grid,
  InfoItem,
  Label,
  Value,
  Status,
  DueInfo,
  DueAmount,
  DueDate
} from './style';

interface PledgeCardProps {
  pledge: {
    id: string;
    amount: number;
    itemType: string;
    itemWeight: number;
    itemKarat: number;
    itemImage: string;
    startDate: string;
    dueDate: string;
    status: 'ACTIVE' | 'RETURNED' | 'DEFAULTED';
    interestRate: number;
    dueAmount: number;
  };
  onClick?: () => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const calculateInterest = (amount: number): number => {
  if (amount <= 50000) {
    return 3;
  } else if (amount <= 100000) {
    return 2.5;
  } else {
    return 2;
  }
};

const PledgeCard: React.FC<PledgeCardProps> = ({ pledge, onClick }) => {
  const interestRate = calculateInterest(pledge.amount);

  return (
    <Card onClick={onClick}>
      <Header>
        <HeaderAmount>
          {formatCurrency(pledge.amount)}
          <InterestBadge>{interestRate}% / month</InterestBadge>
        </HeaderAmount>
      </Header>

      <Content>
        <ItemDetails>
          <ItemImage>
            <Image
              src={pledge.itemImage}
              alt={pledge.itemType}
              width={80}
              height={80}
            />
          </ItemImage>
          <ItemInfo>
            <ItemType>{pledge.itemType}</ItemType>
            <ItemSpecs>
              <span>Weight: {pledge.itemWeight}g</span>
              <span>Karat: {pledge.itemKarat}K</span>
            </ItemSpecs>
          </ItemInfo>
        </ItemDetails>

        <Grid>
          <InfoItem>
            <Label>Start Date</Label>
            <Value>{formatDate(pledge.startDate)}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Due Date</Label>
            <Value>{formatDate(pledge.dueDate)}</Value>
          </InfoItem>
        </Grid>

        <Status status={pledge.status}>
          {pledge.status === 'ACTIVE' && 'Active'}
          {pledge.status === 'RETURNED' && 'Returned'}
          {pledge.status === 'DEFAULTED' && 'Defaulted'}
        </Status>

        {pledge.status === 'ACTIVE' && (
          <DueInfo>
            <DueDate>Next Due Date: {formatDate(pledge.dueDate)}</DueDate>
            <DueAmount>{formatCurrency(pledge.dueAmount)}</DueAmount>
          </DueInfo>
        )}
      </Content>
    </Card>
  );
};

export default PledgeCard;