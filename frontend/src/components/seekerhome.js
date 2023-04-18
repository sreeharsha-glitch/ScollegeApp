//SJSU CMPE 138 Spring 2022 TEAM2
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

function SeekerHome() {
  const [cookies, setCookie] = useCookies(['user']);
  const id = cookies.s_id;

  return (
    <div>
      <div className="  flex flex-column justify-content-center card-container green-container my-8 mx-10">
        <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2" to={"/profile/"+ id} style={{ textDecoration: "none" }}>
          <Button label="View Profile" icon="pi pi-user" className="w-6" />
        </Link>
        <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2" to={"/editProfile/" + id} style={{ textDecoration: "none" }}>
          <Button label="Edit Profile" icon="pi pi-user" className="w-6" />
        </Link>
        <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to={"/application?s_id=" + id}  style={{ textDecoration: "none" }}>
          <Button label="View Applications" icon="pi pi-user" className="w-6" />
        </Link>
        <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to="/scholarship" style={{ textDecoration: "none" }}>
          <Button label="View Scholarship" icon="pi pi-user" className="w-6" />
        </Link>
        <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to="/notification" style={{ textDecoration: "none" }}>
          <Button label="View Notifications" icon="pi pi-user" className="w-6" />
        </Link>
      </div>
    </div>
  );
}

export default SeekerHome;
