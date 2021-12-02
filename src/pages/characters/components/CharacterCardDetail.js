import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
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
    <Card sx={{ display: "flex" }}>
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
          <Typography component="div" variant="h5">
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
          {episodes.length > 0 && (
            <>
              <Typography
                style={{ marginTop: "1rem" }}
                component="div"
                variant="h5"
              >
                Episodes
              </Typography>
              <Grid container spacing={3}>
                {episodes.map((ep) => (
                  <Grid item xs={4}>
                    <Item>{ep.name}</Item>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
}
