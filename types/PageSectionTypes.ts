import React from "react";
export type PageItem = {
  id: Number;
  dataId: String;
  node: React.ReactNode;
};

export type PageSectionTypes = Array<PageItem>;
