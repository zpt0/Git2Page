// Copyright (c) 2026 zpt0
// SPDX-License-Identifier: MIT

export interface GithubProject {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}
