//SJSU CMPE 138 Spring 2022 TEAM2
import { Button } from "primereact/button";
import { Chip } from "primereact/chip";
import { Link } from "react-router-dom";

function Detail(props) { 
  var title = "Details";
  var data = {};
  if(props && props?.title) title = props.title;
  if(props && props?.data)  data = props.data;
  return (
    <div className=" py-8 flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full  lg:w-8">
        <div className="surface-section">
          <div className="font-medium text-3xl text-900 mb-3">{title}</div>

          <ul className="list-none p-0 m-0">
            {Object.keys(data).map(function (key, index) {
              return (
                <li key = {key} className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                  <div className="text-500 w-30 md:w-2  lg:w-3 font-medium">
                    {key}
                  </div>
                  <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                    {data[key]}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Detail;
