import React from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Content from "./Content";

const Prompt = ({ wines, classes }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h3" color="inherit">
            Cellar
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Add new wine
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Content wines={wines} />
      </Modal>
    </>
  );
};

Prompt.propTypes = {
  classes: PropTypes.object.isRequired,
  wines: PropTypes.array.isRequired
};

export default Prompt;
