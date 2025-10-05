package com.jwelleryshop.thrive.dto;

public class CustomerRequest
{
	private String name;
	private String phone;
	private String address;
	private String photoUrl;

	public CustomerRequest(final String name, final String phone, final String address, final String photoUrl)
	{
		this.name = name;
		this.phone = phone;
		this.address = address;
		this.photoUrl = photoUrl;
	}

	public String getName()
	{
		return this.name;
	}

	public void setName(final String name)
	{
		this.name = name;
	}

	public String getPhone()
	{
		return this.phone;
	}

	public void setPhone(final String phone)
	{
		this.phone = phone;
	}

	public String getAddress()
	{
		return this.address;
	}

	public void setAddress(final String address)
	{
		this.address = address;
	}

	public String getPhotoUrl()
	{
		return this.photoUrl;
	}

	public void setPhotoUrl(final String photoUrl)
	{
		this.photoUrl = photoUrl;
	}
}
