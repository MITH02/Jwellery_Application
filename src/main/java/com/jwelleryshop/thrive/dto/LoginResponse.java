package com.jwelleryshop.thrive.dto;

public class LoginResponse
{
    private String token;
    private String role;

    public LoginResponse(final String token, final String role)
	{
        this.token = token;
        this.role = role;
    }

	public String getToken()
	{
		return this.token;
	}

	public void setToken(final String token)
	{
		this.token = token;
	}

	public String getRole()
	{
		return this.role;
	}

	public void setRole(final String role)
	{
		this.role = role;
	}
}
