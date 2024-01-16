package pt.guilherme.crm.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pt.guilherme.crm.dto.CustomerDto;
import pt.guilherme.crm.entity.Customer;
import pt.guilherme.crm.exception.ResourceNotFoundException;
import pt.guilherme.crm.mapper.CustomerMapper;
import pt.guilherme.crm.repository.CustomerRepository;
import pt.guilherme.crm.service.CustomerService;

import java.lang.module.ResolutionException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private CustomerRepository customerRepository;

    @Override
    public CustomerDto createCustomer(CustomerDto customerDto) {

        Customer customer = CustomerMapper.mapToCustomer(customerDto);
        Customer savedCustomer = customerRepository.save(customer);

        return CustomerMapper.mapToCustomerDto(savedCustomer);
    }

    @Override
    public CustomerDto getCustomerById(Long employeeId) {
        Customer customer = customerRepository.findById(employeeId)
                .orElseThrow(() -> new ResolutionException("Customer with the given id doesn't exist: " + employeeId));

        return CustomerMapper.mapToCustomerDto(customer);
    }

    @Override
    public List<CustomerDto> getAllCustomers() {
        List<Customer> customers = customerRepository.findAll();

        return customers.stream().map((customer) -> CustomerMapper.mapToCustomerDto(customer))
                .collect(Collectors.toList());
    }

    @Override
    public CustomerDto updateCustomer(Long customerId, CustomerDto updatedCustomer) {

        Customer customer = customerRepository.findById(customerId).orElseThrow(
                () -> new ResourceNotFoundException("Customer is non existing.")
        );

        customer.setName(updatedCustomer.getName());
        customer.setFinancesNumber(updatedCustomer.getFinancesNumber());
        customer.setEmail(updatedCustomer.getEmail());
        customer.setPhoneNumber(updatedCustomer.getPhoneNumber());
        customer.setCity(updatedCustomer.getCity());

        Customer updatedCustomerObj = customerRepository.save(customer);

        return CustomerMapper.mapToCustomerDto(updatedCustomerObj);
    }

    @Override
    public void deleteCustomer(Long customerId) {

        Customer customer = customerRepository.findById(customerId).orElseThrow(
                () -> new ResourceNotFoundException("Customer is non existing.")
        );
        customerRepository.deleteById(customerId);
    }
}