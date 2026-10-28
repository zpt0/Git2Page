// Copyright (c) 2026 zpt0
// SPDX-License-Identifier: MIT

import { GitHubCalendar } from 'react-github-calendar';
import 'react-github-calendar/tooltips.css';

interface GithubContributionsProps {
  username: string;
  header?: string;
  loading?: boolean;
}

const GithubContributions = ({
  username,
  header = 'GitHub Contributions',
  loading = false,
}: GithubContributionsProps) => {
  if (loading) {
    return (
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{header}</h2>
          <div className="skeleton h-32 w-full" />
        </div>
      </div>
    );
  }

  if (!username) {
    return null;
  }

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{header}</h2>
        <div className="overflow-x-auto overscroll-x-contain max-w-full text-base-content">
          <GitHubCalendar
            username={username}
            blockSize={11}
            blockMargin={3}
            fontSize={12}
            showWeekdayLabels={false}
            style={{ color: 'inherit' }}
            tooltips={{
              activity: {
                text: (activity) =>
                  `${activity.count} contribution${activity.count === 1 ? '' : 's'} on ${activity.date}`,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubContributions;
