import "./App.css";

import CustomerListComponent from "./components/CustomerListComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import CustomerComponent from "./components/CustomerComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<CustomerListComponent />}></Route>
          <Route path="/customers" element={<CustomerListComponent />}></Route>
          <Route path="/add-customer" element={<CustomerComponent />}></Route>
          <Route
            path="/edit-customer/:id"
            element={<CustomerComponent />}
          ></Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
