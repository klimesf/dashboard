export const api = async <T>(request: RequestInfo, init?: RequestInit): Promise<T> => {
  const response = await fetch(request, init);
  const body = await response.json();
  return body as T;
};
