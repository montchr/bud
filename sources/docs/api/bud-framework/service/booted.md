---
id: bud-framework.service.booted
title: booted() method
sidebar_label: booted() method
hide_title: true
sidebar: "api"
slug: booted
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Service.booted() method

Lifecycle method: booted

Signature:

```typescript
/** @virtual */
booted?(app: Framework): Promise<any>;
```

## Parameters

| Parameter | Type                                      | Description                            |
| --------- | ----------------------------------------- | -------------------------------------- |
| app       | [Framework](/api/bud-framework/framework) | [Framework](//bud-framework/framework) |

Returns:

Promise&lt;any&gt;

## Remarks

`booted` is called after all [Service.boot()](/api/bud-framework/service/boot) callbacks are complete.