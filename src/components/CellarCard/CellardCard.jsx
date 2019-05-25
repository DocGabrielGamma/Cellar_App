import React from 'react';
import PropTypes from "prop-types";
import Link from '@material-ui/core/Link';

const CellardCard = ({wine}) => (
  <>
    <div> {wine.name} </div>
    <div> {wine.vineyard} </div>
    <div> {wine.year} </div>
    <Link href={`/${wine.id}`} variant="body2">
        Details
    </Link>
  </>
)

CellardCard.propTypes = {
   classes: PropTypes.object.isRequired,
   wine: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        vineyard: PropTypes.string,
        year: PropTypes.string,
        rating: PropTypes.number,
        comments: PropTypes.string
   }).isRequired
}

export default CellardCard;