import { Muly as TMuly } from "../api/muly/Muly";

export const MULY_TITLE_FIELD = "username";

export const MulyTitle = (record: TMuly): string => {
  return record.username?.toString() || String(record.id);
};
