import React from "react";
import { connect } from "react-redux";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Prompt from "../../components/Prompt";
import PropTypes from "prop-types";
import CellardCard from "../../components/CellarCard";

const List = ({wines, classes}) => {
    debugger;
    return wines.map((wine, index) => {
      return (
        <GridListTile key={wine.id}>
          <CellardCard  wine={wine} />
        </GridListTile>
      );
    });
};

const ListView = ({wines, classes}) => {
    return (
      <>
        <Prompt  wines={wines} />
        <GridList cellHeight={160} className={classes.gridList} >
          <List wines={wines} classes={classes} />
        </GridList>
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
