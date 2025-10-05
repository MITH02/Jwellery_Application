package com.jwelleryshop.thrive.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public class CustomerResponse
{
	private UUID id;
	private String name;
	private String phone;
	private String address;
	private String photoUrl;
	private LocalDateTime createdAt;

	public CustomerResponse(final UUID id, final String name, final String phone, final String address, final String photoUrl, final LocalDateTime createdAt)
	{
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.address = address;
		this.photoUrl = photoUrl;
		this.createdAt = createdAt;
	}

	public UUID getId()
	{
		return id;
	}

	public void setId(final UUID id)
	{
		this.id = id;
	}

	public String getName()
	{
		return name;
	}

	public void setName(final String name)
	{
		this.name = name;
	}

	public String getPhone()
	{
		return phone;
	}

	public void setPhone(final String phone)
	{
		this.phone = phone;
	}

	public String getAddress()
	{
		return address;
	}

	public void setAddress(final String address)
	{
		this.address = address;
	}

	public String getPhotoUrl()
	{
		return photoUrl;
	}

	public void setPhotoUrl(final String photoUrl)
	{
		this.photoUrl = photoUrl;
	}

	public LocalDateTime getCreatedAt()
	{
		return createdAt;
	}

	public void setCreatedAt(final LocalDateTime createdAt)
	{
		this.createdAt = createdAt;
	}
}
