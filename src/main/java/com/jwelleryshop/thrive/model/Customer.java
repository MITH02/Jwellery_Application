package com.jwelleryshop.thrive.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "customers")
@Getter
@Setter
public class Customer
{
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(unique = true, nullable = false, length = 20)
    private String phone;

    @Column(nullable = false)
    private String address;

    private String photoUrl;

    @Column(nullable = false)
    private String idType; // Aadhar, PAN, etc.

    @Column(nullable = false)
    private String idNumber;

    private String idProofUrl; // Scanned copy of ID

    @OneToMany(mappedBy = "customer")
    private List<Pledge> pledges;

    @CreationTimestamp
    private LocalDateTime createdAt;

	public UUID getId()
	{
		return this.id;
	}

	public void setId(final UUID id)
	{
		this.id = id;
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

	public LocalDateTime getCreatedAt()
	{
		return this.createdAt;
	}

	public void setCreatedAt(final LocalDateTime createdAt)
	{
		this.createdAt = createdAt;
	}
}
