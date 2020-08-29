import * as types from './actionTypes';

export function setComic(newComic: types.Comic): types.ComicActionTypes {
  return {
    type: types.SETTING_COMIC,
    payload: newComic,
  };
}
