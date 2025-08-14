/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import WorkspaceProvider from "./provider";

export default function WorkspaceLayout({ children }: any) {
  return (<WorkspaceProvider>{children}</WorkspaceProvider>);
}
