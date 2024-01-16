import React, { useEffect, useState } from "react";
import { customerList, deleteCustomer } from "../services/CustomerService";
import { useNavigate } from "react-router-dom";

/*
 *
 *
 */

const CustomerListComponent = () => {
  const [customers, setCustomers] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllCustomers();
  }, []);
  /*
   *
   *
   */
  function getAllCustomers() {
    customerList()
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /*
   *
   *
   */
  function addNewCustomer() {
    navigator("/add-customer");
  }

  function updateCustomer(id) {
    navigator(`/edit-customer/${id}`);
  }
  /*
   *
   *
   */

  function removeCustomer(id) {
    deleteCustomer(id)
      .then((response) => {
        getAllCustomers();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  /*
   *
   *
   */

  return (
    <div className="container">
      <h2 className="text-center">List of Customers</h2>
      <button className="btn btn-primary mb-2" onClick={addNewCustomer}>
        Add Customer
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Customer Finances Number</th>
            <th>Customer Email</th>
            <th>Customer Phone Number</th>
            <th>Customer City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.financesNumber}</td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.city}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateCustomer(customer.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeCustomer(customer.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerListComponent;
