import React from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  card: {
    backgroundColor: "green",
    fontSize: "24px",
  },
});

const Card = () => {
  return (
    <div {...stylex.props(styles.card)}>
      <p>dfd</p>
    </div>
  );
};

export default Card;
