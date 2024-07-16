import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { appDispatch, RootState } from "./store";

type DispatchFunction = () => appDispatch;

export const useCartDispatch: DispatchFunction = () => useDispatch<appDispatch>();
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector