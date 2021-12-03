import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Paginate from "../../components/ui/Paginate";
import { API_URL } from "../../utils/globals";
import CharacterCard from "./components/CharacterCard";
import { Search } from "./components/Search";

export const CharacterList = () => {
  const [state, setState] = useState({ data: [], loading: true, error: false });
  const { data } = state;
  const [charactername, setCharactername] = useState("");
  const [page, setPage] = useState({ count: 0, pageNumber: 1 });

  useEffect(() => {
    const searchCharacters = async () => {
      try {
        setState({ data: [], loading: true, error: false });
        const response = await axios(`${API_URL}/character`);
        setState({ data: response.data.results, loading: false, error: false });
        setPage({ count: response.data.info.pages, pageNumber: 1 });
      } catch (error) {
        setState({ data: [], loading: false, error: true });
      }
    };
    searchCharacters();
  }, []);

  useEffect(() => {
    const searchCharacters = async () => {
      try {
        setState({ data: [], loading: true, error: false });
        const response = await axios(
          `${API_URL}/character/?name=${charactername}&page=1`
        );
        setState({ data: response.data.results, loading: false, error: false });
        setPage({ count: response.data.info.pages, pageNumber: 1 });
      } catch (error) {
        setState({ data: [], loading: false, error: true });
      }
    };
    searchCharacters();
  }, [charactername]);

  const handleChangeCharacterName = (e) => {
    setCharactername(e.target.value);
  };

  const handleChangePage = async (pageValue) => {
    setPage({ ...page, pageNumber: page });
    try {
      setState({ ...state, loading: true, error: false });
      const response = await axios(
        `${API_URL}/character/?name=${charactername}&page=${pageValue}`
      );
      setState({ data: response.data.results, loading: false, error: false });
    } catch (error) {
      setState({ data: [], loading: false, error: true });
    }
  };

  return (
    <div>
      <Search value={charactername} handleChange={handleChangeCharacterName} />
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
        <Paginate handleChangePage={handleChangePage} count={page.count} />
      </Grid>
    </div>
  );
};
