//SJSU CMPE 138 Spring 2022 TEAM2
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import { userLogin } from "../services";

function SignIn() {
  const [checked, setChecked] = useState(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState();
  const [cookies, setCookie] = useCookies(["user"]);

  const types = [
    { label: "Student Seeker", value: "seeker" },
    { label: "Student Ambassdor", value: "ambassdor" },
    { label: "CLO", value: "clo" },
    { label: "Provider", value: "provider" },
  ];

  async function login() {
    const data = { email, password, name: email };
    const res = await userLogin(data, type);
    if (res) {
      setCookie("type", type, { path: "/" });
      setCookie("s_id", res.s_id, { path: "/" });
      setCookie("p_id", res.p_id, { path: "/" });
      setCookie("c_id", res.c_id, { path: "/" });
      setCookie("col_id", res.col_id, { path: "/" });
      setCookie("name", res.name, { path: "/" });
      setCookie("email", res.email, { path: "/" });
      return true;
    }
    return false;
  }

  const history = useHistory();

  async function handleSubmit() {
    if (type === "seeker") {
      if (await login()) history.push("/seeker/home");
      else alert("SignIn Failed");
    } else if (type === "ambassdor") {
      if (await login()) history.push("/ambassdor/home");
      else alert("SignIn Failed");
    } else if (type === "clo") {
      if (await login()) history.push("/clo/home");
      else alert("SignIn Failed");
    } else if (type === "provider") {
      if (await login()) history.push("/provider/home");
      else alert("SignIn Failed");
    }
  }

  let userName = type === "clo" || type === "provider" ? "Name" : "Email";

  return (
    <div className=" py-8 flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full  lg:w-4">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Welcome </div>
          <span className="text-600 font-medium line-height-3">
            Don't have an account?
          </span>

          <Link
            className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"
            to="/signup"
            style={{ textDecoration: "none" }}
          >
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
              SIGN UP NOW!
            </a>
          </Link>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            {userName}
          </label>
          <InputText
            id="email"
            type="text"
            className="w-full mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-3"
          />
          <div className="flex align-items-center justify-content-between mb-6">
            <Dropdown
              value={type}
              options={types}
              onChange={(e) => setType(e.value)}
              placeholder="Select Type"
            />
          </div>

          <Button
            label="Sign In"
            icon="pi pi-user"
            className="w-full"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
