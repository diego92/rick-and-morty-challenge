import React from "react";
import { useParams } from "react-router";

export const CharacterDetail = () => {
  const { characterId } = useParams();

  return <div>Personaje {characterId}</div>;
};
