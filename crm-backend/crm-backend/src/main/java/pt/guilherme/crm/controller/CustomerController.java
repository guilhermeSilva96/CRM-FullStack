package pt.guilherme.crm.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pt.guilherme.crm.dto.CustomerDto;
import pt.guilherme.crm.entity.Customer;
import pt.guilherme.crm.service.CustomerService;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private CustomerService customerService;

    // Build add Employee Rest API
@PostMapping
    public ResponseEntity<CustomerDto> createCustomer(@RequestBody CustomerDto customerDto){
        CustomerDto savedCustomer = customerService.createCustomer(customerDto);
        return  new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }

    // Build Get Customer Rest API
@GetMapping("{id}")
    public ResponseEntity<CustomerDto> getCustomerById(@PathVariable("id") Long customerId){
        CustomerDto customerDto = customerService.getCustomerById(customerId);
        return ResponseEntity.ok(customerDto);
    }

    // Build Get All Customers List Rest API
@GetMapping
    public ResponseEntity<List<CustomerDto>> getAllCustomers(){
    List<CustomerDto> customers = customerService.getAllCustomers();
    return ResponseEntity.ok(customers);
    }

    // Build Update Customer Rest API
@PutMapping("{id}")
    public ResponseEntity<CustomerDto> updateCustomer(@PathVariable("id") Long customerId,
                                                      @RequestBody CustomerDto updatedCustomer){
        CustomerDto customerDto = customerService.updateCustomer(customerId, updatedCustomer);
        return ResponseEntity.ok(customerDto);

    }
// Build delete customer Rest Api

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable("id") Long customerId){
    customerService.deleteCustomer(customerId);
    return ResponseEntity.ok("Customer deleted successfully");
    }
}
