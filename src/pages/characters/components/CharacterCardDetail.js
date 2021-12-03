import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { Grid } from "@mui/material";

import "../../../css/styles.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "black",
}));

export default function CharacterCardDetail({
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
  episodes,
  created,
}) {
  const theme = useTheme();

  return (
    <Card
      style={{ marginTop: "2rem", border: "1px solid #000", height: "80vh" }}
      sx={{ display: "flex" }}
    >
      <CardMedia
        component="img"
        sx={{ height: "100%", width: 500 }}
        image={image}
        alt={image}
      />
      <Box
        style={{ width: "100%" }}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="span" variant="h5">
            {name}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2rem 0",
            }}
          >
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="div"
            >
              Status: {status}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Gender: {gender}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Species: {species}
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Origin: {origin.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Created: {moment(created).format("L")}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Location: {location.name}
            </Typography>
          </div>
          <Divider />
          {episodes.length > 0 && (
            <div className="episodes__overflow">
              <Typography
                style={{ margin: "1rem 0" }}
                component="div"
                variant="h5"
              >
                Episodes
              </Typography>
              <Grid container spacing={3}>
                {episodes.map((ep) => (
                  <Grid item xs={4}>
                    <Item style={{ backgroundColor: "darkkhaki" }}>
                      {ep.name}
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
}
