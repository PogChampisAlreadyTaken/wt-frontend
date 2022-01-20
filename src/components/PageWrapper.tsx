import * as React from "react";
import LeftsideMenu from "./LeftsideMenu";
interface props {}

export default function PageWrapper(props: React.PropsWithChildren<props>) {
  return (
    <div
      style={{
        position: "fixed",
        top: 64,
        left: 240,
        width: "calc(100% - 240px)",
        height: "calc(100% - 64px)",
        background: "#d7d4d4",
        overflow: "auto",
      }}
    >
      <LeftsideMenu />
      {props.children}
    </div>
  );
}
