import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import DetailsCard from "../../components/DetailsCard";

const DetailsView = ({wines, classes, match}) => {
    const { id } = match.params;
    const wine = wines.find(wine => {
     return wine.id === id;
    });
    debugger;
    return (
      <DetailsCard wine={wine} />
    );
};

const mapsStateToProps = state => {
  return {
    wines: state.wines
  };
};

DetailsView.propTypes = {
  classes: PropTypes.object.isRequired,
  wines: PropTypes.array.isRequired
};

export default connect(mapsStateToProps)(DetailsView);