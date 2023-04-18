//SJSU CMPE 138 Spring 2022 TEAM2
import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getStudents, getUnApprovedStudents, verifyStudent } from "../services/index";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Link } from "react-router-dom";
import { useQuery } from "../routes/query";

var _ = require("lodash");

function Student({ routes }) {
  
  const [Students, setStudents] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const query = useQuery()
  const col_id = query.get("col_id");

  useEffect(() => {
    getUnApprovedStudents(col_id).then((data) => setStudents(data));
  }, []);

  const approve = async (s_id) => {
    const res = await verifyStudent(s_id);
    if(res) alert('Successfully Approve');
    else alert('Something went wrong!');
}
  const deleteRow = () => {
    alert('Successfully Deleted');
  }

const actionBodyTemplate = (row) => {
  const link = `/profile/${row.s_id} `
  return (
    <React.Fragment>
        <div className="pr-3 pb-3">
        <Button label="Verify" onClick={() => approve(row?.s_id)} className="w-6 " />
        </div>
        <Link className=" align-items-center justify-content-center font-bold text-white border-round pr-3  " to={link} style={{ textDecoration: "none" }}>
        <Button label=" Profile"  className="w-6" />
        </Link>
        <div className="pt-2">
        <Button label="Delete" onClick={deleteRow}  className="p-button-danger w-6 " />
        </div>
    </React.Fragment>
  );
};

  const dynamicColumns =
    Students?.length >= 1
      ? _.keys(Students[0])?.map((key) => {
          return <Column key={key} field={key} header={key} />;
        })
      : [];

  return (
    <div>
      <div className="datatable-crud-demo surface-card p-4 border-round shadow-2">
        <Toast ref={toast} />

        <div className="text-3xl text-800 font-bold mb-4">View Students(Unapproved)</div>

        <DataTable
          ref={dt}
          value={Students}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Students"
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

export default Student;
