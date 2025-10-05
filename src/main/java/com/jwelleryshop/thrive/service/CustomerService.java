package com.jwelleryshop.thrive.service;

import com.jwelleryshop.thrive.dto.CustomerRequest;
import com.jwelleryshop.thrive.dto.CustomerResponse;
import com.jwelleryshop.thrive.model.Customer;
import com.jwelleryshop.thrive.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class CustomerService
{
	private final CustomerRepository repo;

	@Value("${file.upload-dir}")
	private String uploadDir;

	public CustomerService(final CustomerRepository repo)
	{
		this.repo = repo;
	}

	public CustomerResponse createCustomer(final String name, final String phone, final String address, final MultipartFile photo)
	{
		String publicPhotoUrl = this.savePhoto(photo);

		Customer customer = new Customer();

		customer.setName(name);
		customer.setPhone(phone);
		customer.setAddress(address);
		customer.setPhotoUrl(publicPhotoUrl);
		customer.setCreatedAt(LocalDateTime.now());

		Customer saved = this.repo.save(customer);

		return this.mapToResponse(saved);
	}

	public CustomerResponse createCustomer(final CustomerRequest request)
	{
		Customer customer = new Customer();

		customer.setName(request.getName());
		customer.setPhone(request.getPhone());
		customer.setAddress(request.getAddress());
		customer.setPhotoUrl(request.getPhotoUrl());
		customer.setCreatedAt(LocalDateTime.now());

		Customer saved = this.repo.save(customer);

		return this.mapToResponse(saved);
	}

	public List<CustomerResponse> getAllCustomers()
	{
		return this.repo.findAll()
						.stream()
						.map(this::mapToResponse)
						.toList();
	}

	public CustomerResponse getCustomerById(final UUID id)
	{
		Customer customer = this.repo.findById(id)
									 .orElseThrow(() -> new RuntimeException("Customer not found with ID: " + id));

		return this.mapToResponse(customer);
	}

	private String savePhoto(final MultipartFile photo)
	{
		if (photo == null || photo.isEmpty())
		{
			return null;
		}

		String fileName = UUID.randomUUID() + "-" + photo.getOriginalFilename();

		File dest = new File(uploadDir + fileName);

		dest.getParentFile().mkdirs();

		try
		{
			photo.transferTo(dest);
		}
		catch (final IOException e)
		{
			throw new RuntimeException("Failed to save photo", e);
		}

		return "/uploads/customers/" + fileName;
	}

	private CustomerResponse mapToResponse(final Customer customer)
	{
		return new CustomerResponse(
				customer.getId(),
				customer.getName(),
				customer.getPhone(),
				customer.getAddress(),
				customer.getPhotoUrl(),
				customer.getCreatedAt()
		);
	}
}
