"use client";

import { useEffect, useMemo, useState } from "react";

import { Research } from "../types/research";
import { workspaceService } from "../services/workspace.service";

export function useWorkspace() {
  const [search, setSearch] = useState("");

  const [researches, setResearches] = useState<Research[]>([]);

  useEffect(() => {
    async function load() {
      const data = await workspaceService.getResearches();
      setResearches(data);
    }

    load();
  }, []);

  const filteredResearches = useMemo(() => {
    if (!search.trim()) return researches;

    return researches.filter((research) =>
      [
        research.pair,
        research.strategy,
        research.timeframe,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [researches, search]);

  return {
    search,
    setSearch,
    researches: filteredResearches,
  };
}
