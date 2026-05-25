import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

function ProductCard() {
  return (
    <Card sx={{ maxWidth: 300, m: 3 }}>
      <CardHeader title="Laptop" />

      <CardContent>
        <Typography>
          Price: ₹50,000
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
