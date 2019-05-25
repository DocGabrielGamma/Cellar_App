import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import CellardCard from "../CellarCard";

const ListView = ({wines, classes}) => {
    debugger;
    return wines.map((wine, key) => {
      return (
        <div key={wine.id}>
          <Typography className={classes.degree} variant="body1">{wine.id}</Typography>
          <CellardCard  wine={wine} />
        </div>
      );
    });
};

const mapsStateToProps = state => {
  return {
    wines: state.wines
  };
};

ListView.propTypes = {
  classes: PropTypes.object.isRequired,
  wines: PropTypes.array.isRequired
};

export default connect(mapsStateToProps)(ListView);
