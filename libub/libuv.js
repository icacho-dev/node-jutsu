/*

# UV Thread Pool Size

This Node.js script performs 5 password-based key derivation functions (PBKDF2) in parallel. It uses the node:crypto module to hash a password with a salt, 10,000 iterations, and a 512-bit SHA512 hash.

The UV_THREADPOOL_SIZE environment variable is set to 5, which means that the 5 pbkdf2 operations will be executed concurrently in the libuv thread pool. The script then logs the index of each operation, its corresponding item value, and the duration since the script started once each hashing operation completes.

https://www.youtube.com/watch?v=3JYNNf3Iljo
*/
const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 5;

const start = Date.now();

Array.from({ length: 5 }, (_, i) => "item_".concat(i + 1)).forEach(
  (val, idx) => {
    crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
      console.log({ idx, val, duration: Date.now() - start });
    });
  }
);
