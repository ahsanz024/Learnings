# Notes

## Event Loop

- JavaScript is single-threaded: only one task can run at a time.
- Web API (Browser)

  - provided by a Browser (NOT by the JS Engine);
  - This can help us create some async, non-blocking behavior 🚀.

- Callstack (JS ENGINE)

  - FILO
  - every function is added to the callstack

- QUEUE / Event Loop
  - If the callstack is empty (all added funcs have returned)
  - 1st item in the QUEUE gets added to the CS
  -
