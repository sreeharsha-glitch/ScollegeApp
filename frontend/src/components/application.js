//SJSU CMPE 138 Spring 2022 TEAM2
import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getApplications } from "../services/ApplicationService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { useCookies } from 'react-cookie';
import { Link , useParams} from "react-router-dom";
import { useQuery } from "../routes/query";


var _ = require("lodash");

function Application({ routes }) {
  
  const [Applications, setApplications] = useState(null);
  const [cookies, setCookie] = useCookies(['user']);
  const {id} = useParams();
  const query = useQuery();
  const s_id = query.get("s_id")


  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    getApplications("s_id",s_id).then((data) => setApplications(data));
  }, []);

  const actionBodyTemplate = (row) => {
    const toLink = `/application/${row?.app_id}`;
    return (
      <React.Fragment>
        <Link
          className="flex align-items-center justify-content-center w-10re h-4re font-bold text-white border-round m-2"
          to={toLink}
          style={{ textDecoration: "none" }}
        >
          <Button label= 'View'  className="w-6" />
        </Link>
      </React.Fragment>
    );
  };

  const dynamicColumns =
    Applications?.length >= 1
      ? _.keys(Applications[0])?.map((key) => {
          return <Column key={key} field={key} header={key} />;
        })
      : [];

  return (
    <div>
      <div className="datatable-crud-demo surface-card p-4 border-round shadow-2">
        <Toast ref={toast} />

        <div className="text-3xl text-800 font-bold mb-4">View Applications</div>

        <DataTable
          ref={dt}
          value={Applications}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Applications"
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

export default Application;
