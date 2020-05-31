// Receive metrics from the privileged side of Deno. This is primarily used in the development of Deno. 'Ops', also called 'bindings', are the go-between between Deno JavaScript and Deno Rust.
console.table(Deno.metrics())

// ┌─────────────────────────┬────────┐
// │          (idx)          │ Values │
// ├─────────────────────────┼────────┤
// │      opsDispatched      │   1    │
// │    opsDispatchedSync    │   1    │
// │   opsDispatchedAsync    │   0    │
// │ opsDispatchedAsyncUnref │   0    │
// │      opsCompleted       │   1    │
// │    opsCompletedSync     │   1    │
// │    opsCompletedAsync    │   0    │
// │ opsCompletedAsyncUnref  │   0    │
// │    bytesSentControl     │   2    │
// │      bytesSentData      │   0    │
// │      bytesReceived      │  283   