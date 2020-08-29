export const SETTING_COMIC = 'SETTING_COMIC';

export interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: [
    {
      items: [
        {
          name: string;
        },
      ];
    },
  ];
  images: [
    {
      extension: string;
      path: string;
    },
  ];
}

export interface ComicState {
  comic: Comic;
}

interface SetComic {
  type: typeof SETTING_COMIC;
  payload: Comic;
}

export type ComicActionTypes = SetComic;
