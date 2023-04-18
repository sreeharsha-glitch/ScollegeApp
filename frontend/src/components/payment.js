//SJSU CMPE 138 Spring 2022 TEAM2
import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getPayment } from "../services";
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

function Payment(props) {
  
  const [Payments, setPayments] = useState(null);
 
  const app_id = props.app_id;

  useEffect(() => {
    getPayment(app_id).then((data) => setPayments(data));
  }, []);


  const dynamicColumns =
    Payments?.length >= 1
      ? _.keys(Payments[0])?.map((key) => {
          return <Column key={key} field={key} header={key} />;
        })
      : [];

  return (
    <div>
      <div className=" py-8 flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full  lg:w-8">
        <div className="surface-section"></div>
      <div className="datatable-crud-demo  p-4 border-round shadow-2">
        <div className="text-3xl text-800 font-bold mb-4">View Payments</div>
        <DataTable
          value={Payments}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Payments"
          responsiveLayout="scroll"
        >
          {dynamicColumns}
          {/* <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "15rem" }}
          ></Column> */}
        </DataTable>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default Payment;
