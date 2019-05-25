import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const Content = ({ classes, wines, onAddNewWine }) => {
  const [values, setValues] = React.useState({
    id: "00",
    name: "Super fancy wine",
    vineyard: "FancyLand",
    year: "1990",
    rating: 5,
    comments: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const createID = function() {
    // This ID is unique so no need to check if existence
    //External code
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  const getUniqueWine = () => {
    return { ...values, id: createID() };
  };

  const addWine = () => {
    onAddNewWine(getUniqueWine());
  };

  return (
    <>
      <div className={classes.paper}>
        <Typography variant="h2">Add new wine</Typography>
        <form className={classes.container} noValidate>
          <TextField
            id="standard-name"
            label="Name"
            value={values.name}
            className={classes.textField}
            onChange={handleChange("name")}
            margin="normal"
          />
          <TextField
            id="standard-vineyard"
            label="vineyard"
            value={values.vineyard}
            onChange={handleChange("vineyard")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-year"
            label="year"
            value={values.year}
            onChange={handleChange("year")}
            className={classes.textField}
            type="number"
            margin="normal"
          />
          <TextField
            id="standard-rating"
            label="rating"
            value={values.rating}
            onChange={handleChange("rating")}
            type="number"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-comments"
            label="comments"
            value={values.comments}
            className={classes.textField}
            onChange={handleChange("comments")}
            margin="normal"
          />
        </form>
        <Button variant="contained" color="primary" onClick={addWine}>
          Add
        </Button>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddNewWine: wine => dispatch({ type: "ADD", wine: wine })
  };
};

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(Content);
