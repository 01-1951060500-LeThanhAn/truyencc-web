import { baseApi } from "../constant/constant";
import { InfoSlider } from "../Interface/Interface";

export const getBanner = async () => {
  const res = await baseApi.get("/truyen/category/truyen-moi-cap-nhat");
  return res.data[0].thumbnails.slice(0, 50);
};

export const getHomeApi = async (type: string): Promise<InfoSlider[]> => {
  const response = baseApi.get(`${type}`);
  return (await response).data[0].thumbnails;
};

export const genresComics = [
  {
    title: "Truyện Full",
    type: "truyen-full",
  },
  {
    title: "Truyện yêu thích",
    type: "truyen-yeu-thich",
  },
  {
    title: "Truyện Mới",
    type: "truyen-tranh-moi",
  },
  {
    title: "Truyện mới cập nhật",
    type: "truyen-moi-cap-nhat",
  },
];
