import * as cors from 'cors';
import * as express from 'express';

import { readMonthlyReport } from './toggl';

const app: express.Application = express();
const PORT = 9998;
const togglToken = process.env.TOGGL_TOKEN ?? '';

app.use(cors());

app.get('/', (_, res) =>
  res.send(JSON.stringify({hello: 'world'})),
);

app.get('/toggl', async (req, res) => {
  const since = req.query.since as string;
  const response = await readMonthlyReport(togglToken, since);
  res.send(JSON.stringify(response));
});

app.listen(PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`⚡️[server]: Server is running at http://dshbrd:${PORT}`);
});
