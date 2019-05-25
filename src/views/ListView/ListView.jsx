import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Prompt from "../../components/Prompt";
import PropTypes from "prop-types";
import CellardCard from "../../components/CellarCard";

const List = ({wines, classes}) => {
    return wines.map((wine, key) => {
      return (
        <div key={wine.id}>
          <Typography className={classes.degree} variant="body1">{wine.id}</Typography>
          <CellardCard  wine={wine} />
        </div>
      );
    });
};

const ListView = ({wines, classes}) => {
    return (
      <>
        <List wines={wines} classes={classes} />
        <Prompt  wines={wines} />
      </>
    )
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
