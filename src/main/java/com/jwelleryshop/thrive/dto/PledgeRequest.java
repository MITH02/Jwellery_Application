package com.jwelleryshop.thrive.dto;

import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

public class PledgeRequest
{
    private UUID customerId;
    private double amount;
    private MultipartFile itemPhoto;
    private MultipartFile receiptPhoto;

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

	public MultipartFile getItemPhoto()
	{
		return this.itemPhoto;
	}

	public void setItemPhoto(final MultipartFile itemPhoto)
	{
		this.itemPhoto = itemPhoto;
	}

	public MultipartFile getReceiptPhoto()
	{
		return this.receiptPhoto;
	}

	public void setReceiptPhoto(final MultipartFile receiptPhoto)
	{
		this.receiptPhoto = receiptPhoto;
	}
}
