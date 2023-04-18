//SJSU CMPE 138 Spring 2022 TEAM2
import { Button } from "primereact/button";
import { Chip } from "primereact/chip";
import { Link , useParams} from "react-router-dom";
import Detail from "../components/detail";
import { getProfile } from "../services";
import React, { useState, useEffect, useRef } from "react";

function Profile() {
  const [profile, setProfile] = useState(null);
  const {id}  = useParams();

  useEffect(() => {
    getProfile(id).then((data) => setProfile(data));
  }, []);

  function handleSubmit() {
    alert("Go to Edit Page");
  }

  return (
    <div>
      <Detail data={profile} title="Student profile" />
      {/* <div className="  flex align-items-center justify-content-center">
        <Link to="/editProfile" style={{ textDecoration: "none" }}>
          <Button label="Edit Profile" icon="pi pi-user" className="w-full" />
        </Link>
      </div> */}
    </div>
  );
}

export default Profile;
