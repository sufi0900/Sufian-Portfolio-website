import { MDBFooter } from "mdb-react-ui-kit";
import React from "react";

const NewDA = () => {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-left"
        // style={{ backgroundColor: "black" }}
      >
        <div
          className="text-center p-3 sit"
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-white" href="https://mdbootstrap.com/">
            Website created by Sufian
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default NewDA;
