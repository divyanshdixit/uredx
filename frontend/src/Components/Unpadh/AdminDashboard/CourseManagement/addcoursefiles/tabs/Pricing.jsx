import { TextField } from "@mui/material";
import React from "react";

function Pricing() {
  return (
    <>
      <div className="flex gap-[15px]">
        {/* <h1>Regular price</h1> */}
        <div className="w-[50%]">
          <label>Regular price</label>
          <TextField
            name="Regular"
            className="w-[100%] rounded"
            required
            placeholder="$$"
          />
        </div>
        <div className="w-[50%]">
          <label>Sale price</label>
          <TextField
            name="Regular"
            className="w-[100%] rounded"
            required
            placeholder="$$"
          />
        </div>
      </div>
    </>
  );
}

export default Pricing;
