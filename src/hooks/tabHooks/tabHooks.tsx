import { fetchPokemons } from "@actions/pokemonActions";
import { useAppDispatch } from "@store/store";

export const useTabHooks = () => {
  const dispatch = useAppDispatch();

  const onMasterTab = () => {
    dispatch(fetchPokemons({ offset: 0, page: 15 }));
  };

  const onBuildTab = () => {};
  const onClashTab = () => {};
  const onShopTab = () => {};
  const onUserTab = () => {};

  return {
    onBuildTab,
    onMasterTab,
    onClashTab,
    onShopTab,
    onUserTab,
  };
};
