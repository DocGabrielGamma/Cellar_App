import React from "react";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const DetailsCard = ({ wine, classes }) => (
  <>
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="http://lorempixel.com/800/600/food/"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {`Name: ${wine.name}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`Vineyard: ${wine.year}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`Made in: ${wine.year}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`Rating: ${wine.rating}/5`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`Comments: ${wine.comments}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/list`} variant="body2">
          Return
        </Link>
      </CardActions>
    </Card>
  </>
);

DetailsCard.propTypes = {
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

export default DetailsCard;
