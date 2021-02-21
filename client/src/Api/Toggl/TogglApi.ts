import { api } from '~/Api';
import { TogglResponse } from '~/Api/Toggl/TogglResponse';

export const readMonthlyReport = async (since?: string): Promise<TogglResponse> => {
  const searchParams = new URLSearchParams(since !== undefined ? [['since', since]] : []);
  return api<TogglResponse>(`http://dshbrd:9998/toggl?${searchParams.toString()}`);
};
