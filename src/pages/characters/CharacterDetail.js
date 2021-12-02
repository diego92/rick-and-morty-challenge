import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../utils/globals";
import CharacterCardDetail from "./components/CharacterCardDetail";

const episodesDetail = async (episodes) => {
  let episodesList = [];

  await Promise.all(
    episodes.map((ep) =>
      axios.get(ep).then((response) => {
        episodesList.push(response.data);
      })
    )
  );

  return episodesList;
};

export const CharacterDetail = () => {
  const { characterId } = useParams();
  const [state, setState] = useState({ data: {}, loading: true, error: false });
  const [episodes, setEpisodes] = useState([]);
  const { data } = state;

  useEffect(() => {
    const searchCharacters = async () => {
      try {
        setState({ data: {}, loading: true, error: false });
        const response = await axios(`${API_URL}/character/${characterId}`);
        setState({ data: response.data, loading: false, error: false });
        if (response.data.episode.length > 0) {
          const episodesList = await episodesDetail(response.data.episode);
          setEpisodes(episodesList);
        }
      } catch (error) {
        setState({ data: {}, loading: false, error: true });
      }
    };
    searchCharacters();
  }, [characterId]);

  return (
    <div>
      {data.id && <CharacterCardDetail {...data} episodes={episodes} />}
    </div>
  );
};
