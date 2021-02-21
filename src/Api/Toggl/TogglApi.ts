import { api } from '~/Api';
import { TogglResponse } from '~/Api/Toggl/TogglResponse';

export const readMonthlyReport = async (token: string, since?: string): Promise<TogglResponse> => {
  const base64token = btoa(`${token}:api_token`);
  const response = await api<TogglResponse>(
    'https://track.toggl.com/reports/api/v3/shared/04604a4a25d7885bc25ac5ab3f196f8f',
    {
      body: JSON.stringify({start_date: since}),
      headers: { Authorization: `Basic ${base64token}` },
      method: 'POST',
    },
  );
  return response;
};
