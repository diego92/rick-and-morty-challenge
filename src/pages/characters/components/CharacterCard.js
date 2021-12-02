import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import "../../../css/styles.css";

export default function CharacterCard({
  gender,
  image,
  name,
  species,
  status,
}) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: 345,
      }}
    >
      <CardMedia component="img" height="350" image={image} alt={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Divider />
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Status:{" "}
            <span
              className={
                status === "Alive"
                  ? "status__badge-alive"
                  : status === "Dead"
                  ? "status__badge-dead"
                  : "status__badge"
              }
            >
              {status}
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Species: {species}
          </Typography>
        </section>

        <Typography variant="body1" color="text.primary">
          Gender: {gender}
        </Typography>
      </CardContent>
    </Card>
  );
}
