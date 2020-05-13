# eslint-plugin-use-optional-annotation

Disallow `undefined` for keeping structure.

The following will all be incorrect usage:

```typescript
const foo = { x: 123, y: undefined };
```

The following will all be correct usage:

```typescript
const foo: { x: number, y?: number } = { x:123 };
```

We made it to keep this TyleScript styleguide's `null-vs-undefined`.

https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md#null-vs-undefined

# Installation

```
yarn add -D eslint-plugin-use-optional-annotation
# or npm i -D eslint-plugin-use-optional-annotation
```

# Configuration

Set `.eslintrc` following

```.eslintrc.js
plugins: [
  'use-optional-annotation' // add to `plugins` arrays final element.
],
// ...
rules: {
  'use-optional-annotation/use-optional-annotation': 'error'
}
```
