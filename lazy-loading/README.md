# Lazy Loading

## Goal

The goal of this code is to demonstrate lazy loading in a TypeScript and HTML project. Lazy loading ensures that certain scripts are loaded only when needed, rather than being part of the initial entry point script. This improves performance by reducing the initial load time of the application.

## Result

Scripts that are loaded on-demand, are not part of the entry point script, example:

```shell
dist
├── assets
│   ├── greet-DuJXfaeS.js ← on-demand
│   ├── index-DiDX4h9s.js
│   └── main-CtNdayoR.js ← entry point
├── index.html
└── vite.svg
```
