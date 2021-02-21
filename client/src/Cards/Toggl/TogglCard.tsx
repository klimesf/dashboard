import * as React from 'react';
import { readMonthlyReport } from '~/Api/Toggl';
import { getMonday } from '~/Utils/time';

const secondsToHours = (seconds: number): number => Math.round(seconds / 3600);

export const TogglCard: React.FunctionComponent = () => {
  const [thisMonth, setThisMonth] = React.useState(0);
  const [thisWeek, setThisWeek] = React.useState(0);

  const loadReport = async () => {
    const thisMonthResponse = await readMonthlyReport();
    setThisMonth(thisMonthResponse.summary_results.totals.seconds);
    const thisWeekResponse = await readMonthlyReport(getMonday());
    setThisWeek(thisWeekResponse.summary_results.totals.seconds);
  };

  React.useEffect(() => {
    loadReport();
  }, []);

  return (
    <div className='card toggl'>
      <h3>Toggl 🕒</h3>
      <button onClick={() => { loadReport(); }}>refresh</button>
      <hr/>
      <p>
        This month: <span>{secondsToHours(thisMonth)}</span> hours<br/>
        This week: <span>{secondsToHours(thisWeek)}</span> hours <i>({Math.round(secondsToHours(thisWeek) * 100 / 40)} %)</i>
      </p>
    </div>
  );
};
