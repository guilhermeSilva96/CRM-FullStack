![CRM-Screenshot](https://github.com/guilhermeSilva96/PaintGame/assets/139381851/55f36e3c-c300-4bd9-9966-5a16dd4d4e9b)


# Full-Stack CRM Application

A full-stack Customer Relationship Management (CRM) application that manages customer information. The project is divided into back-end and front-end components.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Database](#database)

## Introduction

This full-stack CRM application consists of both a back-end and a front-end component. The back-end handles customer data with RESTful APIs, storing information in a local MySQL database, while the front-end provides a user-friendly interface for users to interact with the system.

## Features

### Back-end Features

- Add, retrieve, update, and delete customer information.
- RESTful APIs for seamless integration with front-end applications.
- Exception handling for resource not found scenarios.

### Front-end Features

- View a list of customers.
- Add a new customer.
- Update existing customer information.
- Delete a customer.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

#### Back-end

- Java Development Kit (JDK)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Maven](https://maven.apache.org/)
- Local MySQL database

#### Front-end

- Node.js and npm
- React
- Axios (for making API requests)

### Installation

1. **Back-end:**

   - Clone the back-end repository:

     ```bash
     git clone https://github.com/your-username/crm-backend.git
     ```

   - Navigate to the project directory:

     ```bash
     cd crm-backend
     ```

   - Configure your MySQL database settings in `application.properties`:

     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
     spring.datasource.username=your_database_username
     spring.datasource.password=your_database_password
     ```

   - Build and run the back-end:

     ```bash
     mvn clean install
     mvn spring-boot:run
     ```

2. **Front-end:**

   - Clone the front-end repository:

     ```bash
     git clone https://github.com/your-username/crm-frontend.git
     ```

   - Navigate to the project directory:

     ```bash
     cd crm-frontend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Run the front-end:

     ```bash
     npm start
     ```


## Technologies Used

### Back-end

- **Java Spring Boot:** Backend framework for building Java-based enterprise applications.
- **Maven:** Build and project management tool.
- **Spring Data JPA:** Data access framework for Java applications.
- **H2 Database:** In-memory database for development and testing.

### Front-end

- **React:** JavaScript library for building user interfaces.
- **React Router:** Declarative routing for React.js.
- **Bootstrap 5:** CSS framework for building responsive and mobile-first websites.
- **Axios:** Promise-based HTTP client for the browser.

## API Endpoints

- **Create Customer:**
  - Endpoint: `POST /api/customers`
  - Request Body: CustomerDto
  - Response: CustomerDto

- **Get Customer by ID:**
  - Endpoint: `GET /api/customers/{id}`
  - Path Variable: Customer ID
  - Response: CustomerDto

- **Get All Customers:**
  - Endpoint: `GET /api/customers`
  - Response: List of CustomerDto

- **Update Customer:**
  - Endpoint: `PUT /api/customers/{id}`
  - Path Variable: Customer ID
  - Request Body: Updated CustomerDto
  - Response: Updated CustomerDto

- **Delete Customer:**
  - Endpoint: `DELETE /api/customers/{id}`
  - Path Variable: Customer ID
  - Response: "Customer deleted successfully"


## Database

This application uses a local MySQL database to store customer information. Ensure that you have a MySQL server running, and update the database settings in the back-end `application.properties` file.

