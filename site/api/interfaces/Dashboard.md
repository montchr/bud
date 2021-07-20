---
id: "Dashboard"
title: "Interface: Dashboard"
sidebar_label: "Dashboard"
sidebar_position: 0
custom_edit_url: null
---

**`interface`** Dashboard

## Hierarchy

- [`Service`](../classes/Service.md)

  ↳ **`Dashboard`**

## Properties

### instance

• **instance**: `Instance`

Ink instance

#### Defined in

[packages/@roots/bud-framework/src/Dashboard.ts:15](https://github.com/roots/bud/blob/f85a5e1be/packages/@roots/bud-framework/src/Dashboard.ts#L15)

## Accessors

### app

• `get` **app**(): [`Framework`](../classes/Framework.md)

#### Returns

[`Framework`](../classes/Framework.md)

#### Defined in

[packages/@roots/bud-framework/src/Service.ts:74](https://github.com/roots/bud/blob/f85a5e1be/packages/@roots/bud-framework/src/Service.ts#L74)

## Methods

### render

▸ **render**(`Component`, `title?`): `Instance`

Render stdout

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `any` |
| `title?` | `string` |

#### Returns

`Instance`

#### Defined in

[packages/@roots/bud-framework/src/Dashboard.ts:25](https://github.com/roots/bud/blob/f85a5e1be/packages/@roots/bud-framework/src/Dashboard.ts#L25)

___

### renderError

▸ **renderError**(`body`, `title`): `Instance`

Render error

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `string` |
| `title` | `string` |

#### Returns

`Instance`

#### Defined in

[packages/@roots/bud-framework/src/Dashboard.ts:30](https://github.com/roots/bud/blob/f85a5e1be/packages/@roots/bud-framework/src/Dashboard.ts#L30)

___

### run

▸ **run**(): `void`

Mount and instantiate Dashboard

#### Returns

`void`

#### Defined in

[packages/@roots/bud-framework/src/Dashboard.ts:20](https://github.com/roots/bud/blob/f85a5e1be/packages/@roots/bud-framework/src/Dashboard.ts#L20)