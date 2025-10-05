package com.jwelleryshop.thrive.controller;

import com.jwelleryshop.thrive.dto.CustomerRequest;
import com.jwelleryshop.thrive.dto.CustomerResponse;
import com.jwelleryshop.thrive.service.CustomerService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/customers")
public class CustomerController
{
	private final CustomerService service;

	public CustomerController(final CustomerService service)
	{
		this.service = service;
	}

	@PostMapping(value = "/new", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<CustomerResponse> createCustomerMultipart(
			@RequestParam String name,
			@RequestParam String phone,
			@RequestParam String address,
			@RequestParam("photo") MultipartFile photo)
	{

		final CustomerResponse response = this.service.createCustomer(name, phone, address, photo);

		return ResponseEntity.status(201).body(response);
	}

	@PostMapping(value = "/customerJSon", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<CustomerResponse> createCustomerJson(@RequestBody final CustomerRequest request)
	{
		CustomerResponse response = this.service.createCustomer(request);

		return ResponseEntity.status(201).body(response);
	}

	@GetMapping(value = "/all")
	public ResponseEntity<List<CustomerResponse>> getAllCustomers()
	{
		return ResponseEntity.ok(this.service.getAllCustomers());
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<CustomerResponse> getCustomerById(@PathVariable final UUID id)
	{
		return ResponseEntity.ok(this.service.getCustomerById(id));
	}
}
