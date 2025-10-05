package com.jwelleryshop.thrive.repository;

import com.jwelleryshop.thrive.model.Pledge;
import com.jwelleryshop.thrive.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PledgeRepository extends JpaRepository<Pledge, UUID>
{
    List<Pledge> findByCustomer(final Customer customer);
}
