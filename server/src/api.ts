import fetch from 'node-fetch';
// tslint:disable-next-line: no-duplicate-imports
import { RequestInfo, RequestInit } from 'node-fetch';

export const api = async (request: RequestInfo, init?: RequestInit) => {
  const response = await fetch(request, init);
  const body = await response.json();
  return body;
};
