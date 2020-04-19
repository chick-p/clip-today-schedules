type ItemType = "normal" | "checkbox" | "radio" | "separator";
type ContextType =
  | "all"
  | "page"
  | "frame"
  | "selection"
  | "link"
  | "editable"
  | "image"
  | "video"
  | "audio"
  | "launcher"
  | "browser_action"
  | "page_action";
export type ContextMenu = {
  id: string;
  title: string;
  type: ItemType;
  contexts: ContextType[];
};
