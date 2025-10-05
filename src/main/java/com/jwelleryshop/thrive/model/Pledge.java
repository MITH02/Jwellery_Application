package com.jwelleryshop.thrive.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "pledges")
public class Pledge
{
	@Id
	@GeneratedValue
	private UUID id;

	@ManyToOne
	@JoinColumn(name = "customer_id", nullable = false)
	private Customer customer;

	private double amount;

	private String itemPhotoUrl;
	private String receiptPhotoUrl;

	private LocalDateTime createdAt;

	public UUID getId()
	{
		return this.id;
	}

	public void setId(final UUID id)
	{
		this.id = id;
	}

	public Customer getCustomer()
	{
		return this.customer;
	}

	public void setCustomer(final Customer customer)
	{
		this.customer = customer;
	}

	public double getAmount()
	{
		return this.amount;
	}

	public void setAmount(final double amount)
	{
		this.amount = amount;
	}

	public String getItemPhotoUrl()
	{
		return this.itemPhotoUrl;
	}

	public void setItemPhotoUrl(final String itemPhotoUrl)
	{
		this.itemPhotoUrl = itemPhotoUrl;
	}

	public String getReceiptPhotoUrl()
	{
		return this.receiptPhotoUrl;
	}

	public void setReceiptPhotoUrl(final String receiptPhotoUrl)
	{
		this.receiptPhotoUrl = receiptPhotoUrl;
	}

	public LocalDateTime getCreatedAt()
	{
		return this.createdAt;
	}

	public void setCreatedAt(final LocalDateTime createdAt)
	{
		this.createdAt = createdAt;
	}
}
