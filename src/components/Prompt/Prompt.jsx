import React from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Content from "./Content";
import Typography from "@material-ui/core/Typography";

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
      <Button onClick={handleOpen}>Open Modal</Button>
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
