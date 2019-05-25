import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Content = ({classes, wines, onAddNewWine }) => {

  const getUniqueWine = (wines) => {
    return {
        id: "100",
        name: "Super fancy wine",
        vineyard: "FancyLand",
        year: "1990",
        rating: 5,
        comments: ""
    }
  }

  const addWine = () => {
    onAddNewWine(getUniqueWine(wines));
  };

  return (
    <>
      <div className={classes.paper}>
        <Typography variant="h2">Add new wine</Typography>
        <Button variant="contained" color="primary" onClick={addWine}>Add</Button>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddNewWine: (wine) => dispatch({type:'ADD', wine: wine})
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  wines: PropTypes.array.isRequired
};

export default connect(null, mapDispatchToProps)(Content);
