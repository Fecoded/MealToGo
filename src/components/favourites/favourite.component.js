import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const IsFavourite = favourites.find((x) => x.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !IsFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={IsFavourite ? "heart" : "hearto"}
        size={24}
        color={IsFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
