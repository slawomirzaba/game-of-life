import { download } from "./download";

export const downloadJson = (data: string, fileName: string) => {
  download(data, fileName, "application/json");
};
