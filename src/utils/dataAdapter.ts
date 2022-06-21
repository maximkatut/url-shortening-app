export interface IData {
  code: string;
  full_short_link2: string;
  short_link2: string;
  original_link: string;
}

export interface IAdaptedData {
  code: string;
  link: string;
  shortLink: string;
  originalLink: string;
}

export const dataAdapter = (data: IData) => {
  return {
    code: data.code,
    link: data.full_short_link2,
    shortLink: data.short_link2,
    originalLink: data.original_link,
  };
};
