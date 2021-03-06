import React from "react";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const CellardCard = ({ wine, classes }) => (
  <>
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="http://lorempixel.com/100/100/food/"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {wine.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {wine.vineyard}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {wine.year}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/${wine.id}`} variant="body2">
          Details
        </Link>
      </CardActions>
    </Card>
  </>
);

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
};

export default CellardCard;
