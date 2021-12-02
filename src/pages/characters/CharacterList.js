import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../utils/globals";
import CharacterCard from "./components/CharacterCard";

export const CharacterList = () => {
  const [state, setState] = useState({ data: [], loading: true, error: false });
  const { data } = state;

  useEffect(() => {
    const searchCharacters = async () => {
      try {
        setState({ data: [], loading: true, error: false });
        const response = await axios(`${API_URL}/character`);
        setState({ data: response.data.results, loading: false, error: false });
      } catch (error) {
        setState({ data: [], loading: false, error: true });
      }
    };
    searchCharacters();
  }, []);

  return (
    <div>
      <Grid container spacing={4}>
        {data.length > 0 &&
          data.map((character) => (
            <Grid
              item
              key={character.id}
              xs={12}
              sm={6}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CharacterCard {...character} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
