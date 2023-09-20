/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */

// Use builtin web types if present; else never (user should
// add appropriate lib or types to tsconfig)

/**
 * >>> Confused? <<<
 *
 * If you're getting errors from these types, try adding "lib": ["DOM"]
 * to your tsconfig.json, or otherwise configure the appropriate builtin
 * `fetch` types for your environment.
 */

// @ts-ignore
type _fetch = typeof fetch;
// @ts-ignore
type _Request = Request;
// @ts-ignore
type _RequestInfo = RequestInfo;
// @ts-ignore
type _RequestInit = RequestInit;
// @ts-ignore
type _Response = Response;
// @ts-ignore
type _ResponseInit = ResponseInit;
// @ts-ignore
type _ResponseType = ResponseType;
// @ts-ignore
type _BodyInit = BodyInit;
// @ts-ignore
type _Headers = Headers;
// @ts-ignore
type _HeadersInit = HeadersInit;

declare const _fetch: _fetch;
declare const _Request: {
  prototype: _Request;
  new (input: _RequestInfo | URL, init?: _RequestInit): _Request;
};
declare const _Response: {
  prototype: _Response;
  new (body?: _BodyInit | null, init?: _ResponseInit): _Response;
};
declare const _Headers: {
  prototype: _Headers;
  new (init?: _HeadersInit): _Headers;
};

export const isPolyfilled = false;

export { _fetch as fetch, _Request as Request, _Response as Response, _Headers as Headers };
export type {
  _RequestInit as RequestInit,
  _RequestInfo as RequestInfo,
  _ResponseType as ResponseType,
  _BodyInit as BodyInit,
  _HeadersInit as HeadersInit,
};
