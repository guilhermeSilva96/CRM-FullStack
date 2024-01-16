import React, { useEffect, useState } from "react";
import {
  createCustomer,
  getCustomer,
  updateCustomer,
} from "../services/CustomerService";
import { useNavigate, useParams } from "react-router-dom";

/*
 *
 *
 */

const CustomerComponent = () => {
  const [name, setName] = useState("");
  const [financesNumber, setNif] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const { id } = useParams();
  const navigator = useNavigate();

  /*
   *
   *
   */

  const [errors, setErrors] = useState({
    name: "",
    financesNumber: "",
    email: "",
    phoneNumber: "",
    city: "",
  });

  /*
   *
   *
   */

  // Checking required fields to hold true
  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (name.trim()) {
      errorsCopy.name = "";
    } else {
      errorsCopy.name = "Name is required";
      valid = false;
    }
    if (financesNumber.trim()) {
      errorsCopy.financesNumber = "";
    } else {
      errorsCopy.financesNumber = "NIF is required";
      valid = false;
    }
    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }
    if (phoneNumber.trim()) {
      errorsCopy.phoneNumber = "";
    } else {
      errorsCopy.phoneNumber = "Phone Number is required";
      valid = false;
    }
    if (city.trim()) {
      errorsCopy.city = "";
    } else {
      errorsCopy.city = "City is required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }
  /*
   *
   *
   */

  useEffect(() => {
    if (id) {
      getCustomer(id)
        .then((response) => {
          setName(response.data.name);
          setNif(response.data.financesNumber);
          setEmail(response.data.email);
          setPhoneNumber(response.data.phoneNumber);
          setCity(response.data.city);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  /*
   *
   *
   */

  function saveOrUpdateCustomer(e) {
    e.preventDefault();

    if (validateForm()) {
      const customer = { name, financesNumber, email, phoneNumber, city };
      console.log(customer);

      if (id) {
        updateCustomer(id, customer)
          .then((response) => {
            console.log(response.data);
            navigator("/customers");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createCustomer(customer).then((response) => {
          console.log(response.data);
          navigator("/customers");
        });
      }
    }
  }

  /*
   *
   *
   */

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Customer</h2>;
    } else {
      return <h2 className="text-center">Add Customer</h2>;
    }
  }

  /*
   *
   *
   */

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md - 3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  placeholder="Customer Name"
                  name="name"
                  value={name}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <div className="invalid-feedback"> {errors.name} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">NIF:</label>
                <input
                  type="number"
                  placeholder="Customer Nif"
                  name="financesNumber"
                  value={financesNumber}
                  className={`form-control ${
                    errors.financesNumber ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setNif(e.target.value)}
                />
                {errors.financesNumber && (
                  <div className="invalid-feedback">
                    {" "}
                    {errors.financesNumber}{" "}
                  </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="text"
                  placeholder="Customer Email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className="invalid-feedback"> {errors.email} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Phone Number:</label>
                <input
                  type="number"
                  maxLength="9"
                  placeholder="Customer Phone Number"
                  name="phoneNumber"
                  value={phoneNumber}
                  className={`form-control ${
                    errors.phoneNumber ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && (
                  <div className="invalid-feedback"> {errors.phoneNumber} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">City:</label>
                <input
                  type="text"
                  placeholder="Customer City"
                  name="city"
                  value={city}
                  className={`form-control ${errors.city ? "is-invalid" : ""}`}
                  onChange={(e) => setCity(e.target.value)}
                />
                {errors.city && (
                  <div className="invalid-feedback"> {errors.city} </div>
                )}
              </div>
              <button
                className="btn btn-success"
                onClick={saveOrUpdateCustomer}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerComponent;
