//SJSU CMPE 138 Spring 2022 TEAM2
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

function CLOHome() {
  const [cookies, setCookie] = useCookies(['user']);
  const col_id = cookies.col_id;
  return (
    <div>
    <div className="  flex flex-column justify-content-center card-container green-container my-8 mx-10">
      <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2" to={"/student?col_id=" + col_id} style={{ textDecoration: "none" }}>
        <Button label="View Students(Approval Pending)" icon="pi pi-user" className="w-6" />
      </Link>
      <Link className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2" to={"/approved-student?col_id=" + col_id} style={{ textDecoration: "none" }}>
        <Button label="View Approved Students" icon="pi pi-user" className="w-6" />
      </Link>
      {/* <Link class="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"  to="/scholarship" style={{ textDecoration: "none" }}>
        <Button label="View Scholarship" icon="pi pi-user" className="w-6" />
      </Link> */}
    </div>
  </div>
  );
}

export default CLOHome;
