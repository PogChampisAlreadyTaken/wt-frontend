import React from "react";

interface props {}

export default function PageWrapper(props: React.PropsWithChildren<props>) {
  return (
    <div
      style={{
        position: "fixed",
        top: 64,
        left: 240,
        width: "calc(100% - 240px)",
        height: "100%",
        backgroundColor: "#d0d0d0"
      }}
    >
        {props.children}
    </div>
  );
}