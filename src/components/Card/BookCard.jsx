import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./BookCard.css";
import { Button, CardActions } from "@mui/material";
import { useBookContext } from "../../context/BookContext";

const BookCard = ({ el }) => {
  const { removeProduct } = useBookContext();
  return (
    <div id="card">
      <div className="container">
        <div className="card">
          <Card sx={{ maxWidth: 240 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={el.image}
              title="green iguana"
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography
                sx={{ color: "black" }}
                variant="h5"
                color="text.secondary"
              >
                {el.price} $
              </Typography>
              <Typography>{el.description}</Typography>
              <CardActions>
                <Button
                  onClick={() => removeProduct(el.id)}
                  size="small"
                >
                  delete
                </Button>
                <button className="backet">BASKET</button>
              </CardActions>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default BookCard;
