import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./SelectForm.css";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SelectForm({ data, handleSelectedBook }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState({});

  const handleChange = (event) => {
    setBook(event.target.value);
    handleSelectedBook(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="selectForm__container">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Book</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={book}
          onChange={handleChange}
        >
          {data.map((book) => {
            return <MenuItem value={book}>{book.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
