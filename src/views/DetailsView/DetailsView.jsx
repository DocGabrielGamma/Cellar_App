import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DetailsCard from "../../components/DetailsCard";

const DetailsView = ({ wines, classes, match }) => {
  const { id } = match.params;
  const wine = wines.find(wine => {
    return wine.id === id;
  });
  return (
    <div className={classes.root}>
      <DetailsCard wine={wine} />
    </div>
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
