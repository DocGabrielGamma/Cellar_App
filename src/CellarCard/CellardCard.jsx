import React from 'react';
import PropTypes from "prop-types";

const CellardCard = ({wine}) => (
  <>
    <div> {wine.name} </div>
    <div> {wine.vineyard} </div>
    <div> {wine.year} </div>
  </>
)

CellardCard.propTypes = {
   classes: PropTypes.object.isRequired,
   wine: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        vineyard: PropTypes.string,
        year: PropTypes.string,
        rating: PropTypes.number,
        comments: PropTypes.string
   }).isRequired
}

export default CellardCard;