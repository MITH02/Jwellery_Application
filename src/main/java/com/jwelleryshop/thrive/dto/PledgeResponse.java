package com.jwelleryshop.thrive.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public class PledgeResponse
{
	private UUID id;
	private UUID customerId;
	private double amount;
	private String itemPhotoUrl;
	private String receiptPhotoUrl;
	private LocalDateTime createdAt;

	public PledgeResponse(final UUID id, final UUID customerId, final double amount, final String itemPhotoUrl, final String receiptPhotoUrl, final LocalDateTime createdAt)
	{
		this.id = id;
		this.customerId = customerId;
		this.amount = amount;
		this.itemPhotoUrl = itemPhotoUrl;
		this.receiptPhotoUrl = receiptPhotoUrl;
		this.createdAt = createdAt;
	}

	public UUID getId()
	{
		return this.id;
	}

	public void setId(final UUID id)
	{
		this.id = id;
	}

	public UUID getCustomerId()
	{
		return this.customerId;
	}

	public void setCustomerId(final UUID customerId)
	{
		this.customerId = customerId;
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
