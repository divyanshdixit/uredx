import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import { TextField, Autocomplete } from "@mui/material";

function GlobalDelivery() {
  const [global, setGlobal] = useState("global");

  const handleChange = (event) => {
    setGlobal(event.target.value);
  };

  const Tags = [
    { value: "Canada", label: "Canada" },
    { value: "Mexico", label: "Mexico" },
    { value: "United", label: "United" },
    { value: "United States of America", label: "United States of America" },
  ];

  return (
    <>
      <div className="px-[10px]">
        <h1 className="font-semibold">Global delivery</h1>
        <div className="mt-[10px]">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={global}
              onChange={handleChange}
            >
              <div className="flex items-center">
                <FormControlLabel
                  value="global"
                  control={<Radio />}
                  sx={{ marginRight: "1px" }}
                  label=""
                />
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold">
                  Worldwide delivery
                </p>
              </div>
              <p className="ml-[30px] text-[10px] md:text-[14px] lg:text-[16px]">
                Only available with Shipping method:{" "}
                <span className="text-blue-500 hover:underline ml-[5px]">
                  Fulfilled by Phoenix
                </span>
              </p>

              <div className="flex items-center mt-[10px]">
                <FormControlLabel
                  value="globaldelivery"
                  control={<Radio />}
                  sx={{ marginRight: "1px" }}
                  label=""
                />
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold">
                  Worldwide delivery
                </p>
              </div>
              <Autocomplete
                disablePortal
                id="Tags"
                name="Tags"
                className="mt-[10px] ml-[30px]"
                sx={{ "& .MuiInputBase-root": { padding: "2px" } }}
                options={Tags}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select your course" />
                )}
              />

              <div className="flex items-center mt-[10px]">
                <FormControlLabel
                  value="local"
                  control={<Radio />}
                  sx={{ marginRight: "1px" }}
                  label=""
                />
                <p className="text-[10px] md:text-[16px] lg:text-[18px] font-semibold">
                  Local delivery
                </p>
              </div>
              <p className="ml-[30px] text-[10px] md:text-[14px] lg:text-[16px]">
                Only available with Shipping method:{" "}
                <span className="text-blue-500 hover:underline ml-[5px]">
                  Fulfilled by Phoenix
                </span>
              </p>
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
}

export default GlobalDelivery;
