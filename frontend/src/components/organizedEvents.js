//SJSU CMPE 138 Spring 2022 TEAM2
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getOrganizedEvents } from "../services/EventService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Link } from "react-router-dom";
import { useQuery } from "../routes/query";

var _ = require("lodash");

function OrganizedEvents({ routes }) {
  
  const [Events, setEvents] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const query = useQuery();
  const s_id = query.get("s_id")

  console.log(s_id);
  useEffect(() => {
    getOrganizedEvents(s_id).then((data) => setEvents(data));
  }, []);
  

  const apply = () => {
      alert('Successfully Notified');
  }

  const actionBodyTemplate = (row) => {
    return (
      <React.Fragment>
          <Button label="Notify to all students" onClick={apply} className="w-6" />
      </React.Fragment>
    );
  };

  const dynamicColumns =
    Events?.length >= 1
      ? _.keys(Events[0])?.map((key) => {
          return <Column key={key} field={key} header={key} />;
        })
      : [];

  return (
    <div>
      <div className="datatable-crud-demo surface-card p-4 border-round shadow-2">
        <Toast ref={toast} />

        <div className="text-3xl text-800 font-bold mb-4">View Organized Events</div>

        <DataTable
          ref={dt}
          value={Events}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Events"
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

export default OrganizedEvents;
