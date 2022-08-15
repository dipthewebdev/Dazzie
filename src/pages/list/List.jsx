import React from "react";
import Customer from "../../components/customer/Customer";
import Navbar from "../../components/navbar/Navbar";
import Orders from "../../components/orders/Orders";
import Sidebar from "../../components/sidebar/Sidebar";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Orders />
      </div>
    </div>
  );
};

export default List;
