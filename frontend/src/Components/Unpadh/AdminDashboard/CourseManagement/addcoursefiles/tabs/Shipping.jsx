import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";

function Shipping() {
  const [value, setValue] = useState("fulfilledBySeller");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="px-[10px]">
      <h1 className="font-semibold">Shipping Type</h1>
      <div>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <div className="flex items-center">
              <FormControlLabel
                value="fulfilledBySeller"
                control={<Radio />}
                sx={{ marginRight: "1px" }}
                label=""
              />
              <p className="text-[10px] md:text-[16px] lg:text-[18px] font-semibold">
                Fulfilled by Seller
              </p>
            </div>
            <p className="text-[10px] md:text-[12px] lg:text-[15px] ml-[30px]">
              You’ll be responsible for product delivery.
              <br />
              Any damage or delay during shipping may cost you a Damage fee.
            </p>

            <div className="flex items-center mt-[10px]">
              <FormControlLabel
                value="fulfilledByOther"
                control={<Radio />}
                sx={{ marginRight: "1px" }}
                label=""
              />
              <p className="text-[10px] md:text-[16px] lg:text-[18px] font-semibold">
                Fulfilled by Phoenix
              </p>
            </div>
            <p className="text-[10px] md:text-[12px] lg:text-[15px] ml-[30px]">
              Your product, Our responsibility.
              <br />
              For a measly fee, we will handle the delivery process for you.
            </p>
          </RadioGroup>
        </FormControl>
      </div>
      <p className="mt-[20px] ml-[30px] text-[10px] md:text-[12px] lg:text-[15px]">
        See our{" "}
        <span className="text-blue-500 hover:underline ml-[5px]">
          delivery terms conditions
        </span>
        for details.
      </p>
    </div>
  );
}

export default Shipping;
