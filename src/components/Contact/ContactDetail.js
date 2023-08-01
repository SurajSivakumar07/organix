import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";

import { Button } from "@mui/material";

export default function ContactDetails() {
  const [name, setName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [city, setCity] = React.useState("");

  const formHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/contact", {
        name: name + firstName,
        email: mobile,
        description: city,
      })
      .then((res) => alert("Our team will contact soon !"));
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact US!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="email "
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => setMobile(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>

        <Button
          variant="contained"
          disableElevation
          style={{ marginTop: 40 }}
          onClick={formHandler}
        >
          Submit
        </Button>
      </Grid>
    </React.Fragment>
  );
}
