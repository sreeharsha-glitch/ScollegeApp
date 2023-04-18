//SJSU CMPE 138 Spring 2022 TEAM2
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

function AmbassdorHome() {
  const [cookies, setCookie] = useCookies(['user']);
  const s_id = cookies.s_id;
  return (
    <div>
    <div className="  flex flex-column justify-content-center card-container green-container my-8 mx-10">
      {
      /* <Link class="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2" to="/profile" style={{ textDecoration: "none" }}>
        <Button label="View Profile" icon="pi pi-user" className="w-6" />
      </Link>
      <Link class="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2" to="/editProfile" style={{ textDecoration: "none" }}>
        <Button label="Edit Profile" icon="pi pi-user" className="w-6" />
      </Link> */}
      {/* <Link class="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to="/application" style={{ textDecoration: "none" }}>
        <Button label="View Applications" icon="pi pi-user" className="w-6" />
      </Link>
      <Link class="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to="/scholarship" style={{ textDecoration: "none" }}>
        <Button label="View Scholarship" icon="pi pi-user" className="w-6" />
      </Link> */}
      
      <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to={"/event/?s_id=" + s_id} style={{ textDecoration: "none" }}>
        <Button label="View Events" icon="pi pi-user" className="w-6" />
      </Link>
      <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to={"/organized-events/?s_id="+ s_id} style={{ textDecoration: "none" }}>
        <Button label="View Organized Events" icon="pi pi-user" className="w-6" />
      </Link>
      <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to="/create-event" style={{ textDecoration: "none" }}>
        <Button label="Create Events" icon="pi pi-user" className="w-6" />
      </Link>
      
    </div>
  </div>
  );
}

export default AmbassdorHome;
