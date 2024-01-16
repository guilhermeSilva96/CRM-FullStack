package pt.guilherme.crm.service;

import pt.guilherme.crm.dto.CustomerDto;

import java.util.List;

public interface CustomerService {
    CustomerDto createCustomer(CustomerDto customerDto);


    CustomerDto getCustomerById(Long employeeId);

    List<CustomerDto> getAllCustomers();

    CustomerDto updateCustomer(Long customerID, CustomerDto updatedCustomer);

    void deleteCustomer(Long customerId);
}
