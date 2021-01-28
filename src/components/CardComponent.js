import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./CardComponent.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "50%",
    backgroundColor: "black",
    color: "white",
  },
});

export default function CardComponent({ book }) {
  console.log("book", book);
  const classes = useStyles();
  const renderer = book.name ? (
    <div className="cardComponent">
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {book.name}
            </Typography>
            <Typography variant="body2" color="white" component="p">
              {book.authors}
            </Typography>
            <Typography variant="body2" color="white" component="p">
              {book.publisher}
            </Typography>
            <Typography variant="body2" color="white" component="p">
              {book.numberOfPages}
            </Typography>
            <Typography variant="body2" color="white" component="p">
              {book.isbn}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  ) : (
    "No book to show"
  );

  console.log(book);

  return <div className="cardComponent__container">{renderer}</div>;
}
