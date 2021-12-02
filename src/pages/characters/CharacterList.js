import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../utils/globals";

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

  console.log(data);

  return <div>Characters</div>;
};
