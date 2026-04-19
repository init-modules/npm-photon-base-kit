"use client";

import { useEffect, useRef, useState } from "react";
import { useWebsiteBuilderStore } from "@init-modules/website-builder";

export type SurfaceBreakpoints = {
  width: number;
  atLeastSm: boolean;
  atLeastMd: boolean;
  atLeastLg: boolean;
  atLeastXl: boolean;
};

const createSurfaceBreakpoints = (width: number): SurfaceBreakpoints => ({
  width,
  atLeastSm: width >= 640,
  atLeastMd: width >= 768,
  atLeastLg: width >= 1024,
  atLeastXl: width >= 1280,
});

export const useSurfaceBreakpoints = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const mode = useWebsiteBuilderStore((state) => state.mode);
  const builderSurface = mode === "builder";
  const [breakpoints, setBreakpoints] = useState<SurfaceBreakpoints>(
    createSurfaceBreakpoints(builderSurface ? 0 : 1440),
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    if (!builderSurface) {
      if (typeof window === "undefined") {
        return;
      }

      const sync = () =>
        setBreakpoints(createSurfaceBreakpoints(window.innerWidth));

      sync();
      window.addEventListener("resize", sync, { passive: true });

      return () => window.removeEventListener("resize", sync);
    }

    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const surface =
      element.closest<HTMLElement>("[data-wb-surface-region]") ?? element;
    const sync = () =>
      setBreakpoints(createSurfaceBreakpoints(Math.round(surface.clientWidth)));

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(surface);

    return () => observer.disconnect();
  }, [builderSurface]);

  return { ref, ...breakpoints };
};
