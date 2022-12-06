export interface ComicFollow {
  uid?: string;

  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface Banner extends ComicFollow {
  info: {
    [key: string]: string | number;
  };
}

export interface Chapter {
  href: string;
  title: string;

  newLinks: string;

  nextLinks: string;
  debut: string;
}

export interface InfoSlider {
  name: string;
  image: string;
  url: string;
  slug: string;
  key: string | number;

  className?: string;
}

export interface Type {
  type: string;
  title: string;
  param: string;
}

export interface DetailInfo {
  thumbnails: [
    {
      name: string;
      images: string;
      translate: string;
      description: string;
      view: string;
      status: string;
      actions: {
        category: string;
        action: string;
      }[];
      love: string;
    }
  ];

  listChapters: any[];
}

export interface DetailItem {
  name: string;
  images: string;
  translate: string;
  description: string;
  view: string;
  status: string;
  actions: {
    category: string;
    action: string;
  }[];
  love: string;

  listChapters: any[];
}

export interface Actions {
  category: string;
  action: string;
}
export interface SelectChap {
  title: string;
  nextChap: string | undefined;
  chap: string;
  href: string;
}

export interface Genres {
  params: string;
  name: string;
}

export interface Category {
  title: string;
  type: string;
}

export interface ReactionArr {
  avatar: string;
  image: string;
  name: string;
  userId: string;
  userName: string;
}

export interface Size {
  width: number | undefined;
  height: number | undefined;
}
