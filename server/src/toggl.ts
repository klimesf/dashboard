import { api } from './api';

export const readMonthlyReport = async (token: string, since?: string) => {
  const base64token = Buffer.from(`${token}:api_token`).toString('base64');
  const response = await api(
    'https://track.toggl.com/reports/api/v3/shared/04604a4a25d7885bc25ac5ab3f196f8f',
    {
      body: JSON.stringify({start_date: since}),
      headers: { Authorization: `Basic ${base64token}` },
      method: 'POST',
    },
  );
  return response;
};
