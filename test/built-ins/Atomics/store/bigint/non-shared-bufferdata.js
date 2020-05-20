// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.store
description: >
  Atomics.store will operate on TA when TA.buffer is not a SharedArrayBuffer
features: [ArrayBuffer, Atomics, BigInt, TypedArray]
---*/

const i64a = new BigInt64Array(
  new ArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4)
);

assert.sameValue(Atomics.store(i64a, 0, 1), 1);
