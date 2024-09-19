import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TextField } from "@mui/material";

function Attributes() {
  return (
    <div>
      <h1>Attributes</h1>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Fragile Product"
        />
        <FormControlLabel control={<Checkbox />} label="Biodegradable" />
        <FormControlLabel control={<Checkbox />} label="Frozen Product" />
        <TextField
          name="temperature"
          className="w-[50%] rounded"
          required
          placeholder="Max. Allowed Temperature"
        />
      </FormGroup>
      <FormControlLabel control={<Checkbox />} label="Frozen Product" />
      <div style={{ marginTop: "1rem" }}>
        <TextField type="date" className="w-[50%]" name="datetime" />
      </div>
    </div>
  );
}

export default Attributes;
