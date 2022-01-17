---
id: bud-extensions.extensions.make
title: make() method
sidebar_label: make() method
hide_title: true
sidebar: "api"
slug: make
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Extensions.make() method

Returns an array of plugin instances which have been registered to the container and are set to be used in the compilation

Signature:

```typescript
make(): Promise<{
        [key: string]: any;
        apply: CallableFunction;
    }[]>;
```

Decorators:

`@bind`

Returns:

Promise&lt;{ \[key: string\]: any; apply: CallableFunction; }\[\]&gt;

An array of plugin instances