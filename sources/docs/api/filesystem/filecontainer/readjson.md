---
id: filesystem.filecontainer.readjson
title: readjson() method
sidebar_label: readjson() method
hide_title: true
sidebar: "api"
slug: readjson
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## FileContainer.readJson() method

Retrieve file contents as a javascript object.

Signature:

```typescript
readJson(key: string): {
        [key: string]: any;
    };
```

## Parameters

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| key       | string |             |

Returns:

{ \[key: string\]: any; }

## Example

```js
fsInstance.readJson("some.file.json");
// => {json: 'contents', as: 'an object'}
```