package com.jwelleryshop.thrive.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt = LocalDateTime.now();

    public enum Role
	{
        ADMIN, STAFF
    }

	public Long getId()
	{
		return this.id;
	}

	public void setId(final Long id)
	{
		this.id = id;
	}

	public String getUsername()
	{
		return this.username;
	}

	public void setUsername(final String username)
	{
		this.username = username;
	}

	public String getPassword()
	{
		return this.password;
	}

	public void setPassword(final String password)
	{
		this.password = password;
	}

	public Role getRole()
	{
		return this.role;
	}

	public void setRole(final Role role)
	{
		this.role = role;
	}

	public LocalDateTime getCreatedAt()
	{
		return this.createdAt;
	}

	public void setCreatedAt(final LocalDateTime createdAt)
	{
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt()
	{
		return this.updatedAt;
	}

	public void setUpdatedAt(final LocalDateTime updatedAt)
	{
		this.updatedAt = updatedAt;
	}
}
