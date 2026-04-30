// Server-safe barrel: does NOT re-export `./module` (which top-level-evaluates
// `createPhotonKit(...)` from a client-only `@init/photon/public` reference and
// crashes RSC when transitively imported by SSR code paths). Consumers that need
// the admin installable kit must import from `@init/photon-base-kit/module`.
export * from "./documents";
export * from "./demo";
export * from "./primitives";
export * from "./profile-presets";
export * from "./themes";
