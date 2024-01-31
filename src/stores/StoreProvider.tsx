"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

export default function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef(store);
  return <Provider store={storeRef.current}>{children}</Provider>;
}
