//SJSU CMPE 138 Spring 2022 TEAM2
import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getNotifications } from "../services";
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

function Notification({ routes }) {
  
  const [Notifications, setNotifications] = useState(null);
 
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    getNotifications().then((data) => setNotifications(data));
  }, []);


  const dynamicColumns =
    Notifications?.length >= 1
      ? _.keys(Notifications[0])?.map((key) => {
          return <Column key={key} field={key} header={key} />;
        })
      : [];

  return (
    <div>
      <div className="datatable-crud-demo surface-card p-4 border-round shadow-2">
        <Toast ref={toast} />

        <div className="text-3xl text-800 font-bold mb-4">View Notifications</div>

        <DataTable
          ref={dt}
          value={Notifications}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Notifications"
          responsiveLayout="scroll"
        >
          {dynamicColumns}
        </DataTable>
         </div>
     
    </div>
  );
}

export default Notification;
