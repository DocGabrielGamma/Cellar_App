const styles = theme => {
  return {
    root: {
      margin: "1em 1em 1.5em 1em",
      display: "flex",
      flexDirection: "column",
      textAlign: "left"
    },
    educationsTitle: {
      float: "left",
      textTransform: "uppercase",
      color: theme.palette.primary.light,
      margin: "0.5em 0.5em 1em 0em",
      width: "100%",
      textAlign: "left"
    },
    degree: {
      fontWeight: 500
    },
    body1: {
      fontSize: "0.7em"
    }
  };
};

export default styles;
