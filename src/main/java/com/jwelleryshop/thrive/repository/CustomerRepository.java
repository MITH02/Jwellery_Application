package com.jwelleryshop.thrive.repository;

import com.jwelleryshop.thrive.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface CustomerRepository extends JpaRepository<Customer, UUID>
{
    Optional<Customer> findByPhone(final String phone);
}
