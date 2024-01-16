package pt.guilherme.crm.mapper;

import pt.guilherme.crm.dto.CustomerDto;
import pt.guilherme.crm.entity.Customer;

public class CustomerMapper {

    public static CustomerDto mapToCustomerDto(Customer customer){
       return new CustomerDto(
               customer.getId(),
               customer.getName(),
               customer.getFinancesNumber(),
               customer.getEmail(),
               customer.getPhoneNumber(),
               customer.getCity()
               );
    }

    public static Customer mapToCustomer(CustomerDto customerDto){
        return new Customer(
                customerDto.getId(),
                customerDto.getName(),
                customerDto.getFinancesNumber(),
                customerDto.getEmail(),
                customerDto.getPhoneNumber(),
                customerDto.getCity()
        );
    }
}
