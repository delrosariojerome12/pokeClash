import { fetchPokemons } from "@actions/pokemonActions";
import MasterDexCard from "@components/screens/masterDex/cards/MasterDexCard";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useEffect } from "react";
import { FlatList } from "react-native";

export const useMasterDexHooks = () => {
  const {
    dexListState: {
      data,
      isError,
      isLoading,
      isPaginating,
      isRefreshing,
      isSearching,
    },
    selectState: { selectedPokemon },
  } = useAppSelector((state) => state.masterDex);

  const dispatch = useAppDispatch();

  const renderMasterList = () => {
    const renderMasterCard = (item: any) => {
      return <MasterDexCard {...item} />;
    };

    return (
      <>
        <FlatList
          data={data}
          renderItem={({ item }) => renderMasterCard(item)}
          keyExtractor={(item, index) => index.toString()} // Add a key extractor
        />
      </>
    );
  };

  return { renderMasterList };
};
