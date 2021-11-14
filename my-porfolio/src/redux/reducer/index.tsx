import { combineReducers } from "redux";
import { History } from "history";
import { connectRouter } from "connected-react-router";

export function createRootReducer(history: History) {
  return combineReducers({
    //...
    router: connectRouter(history),
  });
}

/**
 * @description Use IRootState to set interface for state for callback
 *  in useSelector
 */
export type IRootState = ReturnType<ReturnType<typeof createRootReducer>>;
