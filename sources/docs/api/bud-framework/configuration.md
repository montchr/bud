---
id: bud-framework.configuration
title: configuration interface
sidebar_label: configuration interface
hide_title: true
sidebar: "api"
slug: configuration
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Configuration interface

Framework base configuration

Signature:

```typescript
export interface Configuration
```

## Remarks

These are just initial values. They can be overwritten by the user, or extended by the framework/modules. It is recommended to use to extend the

## Properties

| Property                                                  | Type                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                      |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [build](/api/bud-framework/configuration/build)           | CompilerConfig                                                                                                                                                                                                                                                                                                                                                                                          | Initial webpack configuration values             |
| [cache](/api/bud-framework/configuration/cache)           | { type?: 'filesystem' &#124; 'memory' &#124; false; }                                                                                                                                                                                                                                                                                                                                                   | Cache settings                                   |
| [cli?](/api/bud-framework/configuration/cli)              | { args: Record&lt;string, any&gt;; argv: Array&lt;string&gt;; flags: Record&lt;string, any&gt;; raw: Array&lt;Record&lt;string, string&gt;&gt;; metadata: Record&lt;string, Record&lt;string, any&gt;&gt;; }                                                                                                                                                                                            | <i>(Optional)</i>                                |
| [extension](/api/bud-framework/configuration/extension)   | [Index](//bud-framework/index)&lt;any&gt;                                                                                                                                                                                                                                                                                                                                                               | Initial options for registered extensions        |
| [features](/api/bud-framework/configuration/features)     | { cache?: boolean; dashboard?: boolean; clean?: boolean; hash?: boolean; html?: boolean; inject?: boolean; install?: boolean; log?: boolean; manifest?: boolean; runtimeChunk?: boolean; splitChunks?: boolean; }                                                                                                                                                                                       | Features to enable                               |
| [fileFormat](/api/bud-framework/configuration/fileformat) | string                                                                                                                                                                                                                                                                                                                                                                                                  | File format (when hashing is disabled)           |
| [hashFormat](/api/bud-framework/configuration/hashformat) | string                                                                                                                                                                                                                                                                                                                                                                                                  | File format when hashing is enabled              |
| [location](/api/bud-framework/configuration/location)     | [Locations](//bud-framework/locations)                                                                                                                                                                                                                                                                                                                                                                  | Registered fs directories                        |
| [log?](/api/bud-framework/configuration/log)              | { level?: 'v' &#124; 'vv' &#124; 'vvv' &#124; 'vvvv'; }                                                                                                                                                                                                                                                                                                                                                 | <i>(Optional)</i> Logger settings                |
| [mode](/api/bud-framework/configuration/mode)             | 'production' &#124; 'development'                                                                                                                                                                                                                                                                                                                                                                       | Mode                                             |
| [name](/api/bud-framework/configuration/name)             | string                                                                                                                                                                                                                                                                                                                                                                                                  | Application name                                 |
| [patterns](/api/bud-framework/configuration/patterns)     | Record&lt;string, RegExp&gt;                                                                                                                                                                                                                                                                                                                                                                            | Shared regular expressions for pattern matching. |
| [server](/api/bud-framework/configuration/server)         | Server/[Configuration](//bud-framework/configuration)                                                                                                                                                                                                                                                                                                                                                   | Server configuration                             |
| [theme](/api/bud-framework/configuration/theme)           | { spacing: number; colors: { foreground: TermColor; faded: TermColor; primary: TermColor; primaryAlt: TermColor; error: TermColor; errorAlt: TermColor; warning: TermColor; success: TermColor; accent: TermColor; flavor: TermColor; }; screens: \[ \[ number, number \], \[ number, number \], \[ number, number \], \[ number, number \] \]; columns: number; maxWidth: number; maxHeight: number; } | Command line theme configuration                 |