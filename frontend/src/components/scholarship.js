//SJSU CMPE 138 Spring 2022 TEAM2
import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { applyToScholarship, getScholarships } from "../services/ScholarshipService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

var _ = require("lodash");

function Scholarship({ routes }) {
  
  const [Scholarships, setScholarships] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    getScholarships().then((data) => setScholarships(data));
  }, []);
  
  const apply = async (row) => {
    const {p_id, sc_id} = row;
    const s_id = cookies.s_id;
    const res = await applyToScholarship(p_id, sc_id, s_id) 
    if (res)alert('Success Applied');
    else alert ('Something went wrong !')

  }

  const actionBodyTemplate = (row) => {
    return (
      <React.Fragment>
          <Button label="Apply" onClick={() => apply(row)} className="w-6" />
      </React.Fragment>
    );
  };

  const dynamicColumns =
    Scholarships?.length >= 1
      ? _.keys(Scholarships[0])?.map((key) => {
          return <Column key={key} field={key} header={key} />;
        })
      : [];

  return (
    <div>
      <div className="datatable-crud-demo surface-card p-4 border-round shadow-2">
        <Toast ref={toast} />

        <div className="text-3xl text-800 font-bold mb-4">View Scholarships</div>

        <DataTable
          ref={dt}
          value={Scholarships}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Scholarships"
          responsiveLayout="scroll"
        >
          {dynamicColumns}
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "15rem" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Scholarship;
