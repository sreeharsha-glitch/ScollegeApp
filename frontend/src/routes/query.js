//SJSU CMPE 138 Spring 2022 TEAM2
import { useLocation } from "react-router-dom";
import React from "react";

export function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
