package pt.guilherme.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pt.guilherme.crm.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
