import React from "react";
export type PageItem = {
  id: number;
  dataId: string;
  node: React.ReactNode;
};

export type PageSectionTypes = Array<PageItem>;
