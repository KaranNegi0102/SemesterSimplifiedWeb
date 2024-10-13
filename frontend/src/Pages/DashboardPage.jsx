import React, { useState, useEffect } from "react";
import axios from "axios";
import Account from "../Components/Account";
import Uploads from "../Components/Uploads";
import Connections from "../Components/Connections";
import SidePanel from "../Components/SidePanel";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("Account");
  const [userDetails, setuserDetails] = useState({
    username: "",
    university: "",
    uploads: "",
    email: "",
  });

  const userData = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/user/getInfo", {
      withCredentials: true,
    });

    const userDetails = res.data.user;
    // console.log(userDetails);

    setuserDetails({
      username: userDetails.name,
      university: userDetails.university,
      uploads: userDetails.uploads,
      email: userDetails.email,
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Account":
        return <Account userDetails={userDetails} />;
      case "Uploads":
        return <Uploads userDetails={userDetails} />;
      case "Connections":
        return <Connections userDetails={userDetails} />;
      default:
        return <Account userDetails={userDetails} />;
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <SidePanel
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userDetails={userDetails}
      />
      <div className="flex-1 p-6 overflow-auto">{renderContent()}</div>
    </div>
  );
};

export default DashboardPage;
