import {
  Comic,
  ComicState,
  ComicActionTypes,
  SETTING_COMIC,
} from './actionTypes';

export const initialState: ComicState = {
  comic: {} as Comic,
};

export default (state = initialState, action: ComicActionTypes): ComicState => {
  switch (action.type) {
    case SETTING_COMIC:
      return {
        comic: action.payload,
      };

    default:
      return state;
  }
};
