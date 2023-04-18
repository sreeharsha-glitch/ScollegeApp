//SJSU CMPE 138 Spring 2022 TEAM2
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

function ProviderHome() {
  return (
    <div>
    <div className="  flex flex-column justify-content-center card-container green-container my-8 mx-10">
      <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to="/provider-application" style={{ textDecoration: "none" }}>
        <Button label="View Applications" icon="pi pi-user" className="w-6" />
      </Link>
      <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to="/provider-scholarship" style={{ textDecoration: "none" }}>
        <Button label="View Scholarship" icon="pi pi-user" className="w-6" />
      </Link>
      <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to="/create-scholarship" style={{ textDecoration: "none" }}>
        <Button label="Create Scholarship" icon="pi pi-user" className="w-6" />
      </Link>
    </div>
  </div>
  );
}

export default ProviderHome;
