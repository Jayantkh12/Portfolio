import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'Jayantkh12';

// Cache for 15 minutes
const CACHE_TTL = 15 * 60 * 1000;
const cache: Record<string, { data: unknown; ts: number }> = {};

function fromCache<T>(key: string): T | null {
  const entry = cache[key];
  if (entry && Date.now() - entry.ts < CACHE_TTL) return entry.data as T;
  return null;
}
function toCache(key: string, data: unknown) {
  cache[key] = { data, ts: Date.now() };
}

export interface GitHubStats {
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  mergedPRs: number;
  followers: number;
}

export interface UseGitHubStatsResult {
  stats: GitHubStats | null;
  loading: boolean;
  error: boolean;
  lastUpdated: Date | null;
}

export function useGitHubStats(): UseGitHubStatsResult {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const cacheKey = `gh_${GITHUB_USERNAME}`;
    const cached = fromCache<GitHubStats>(cacheKey);
    if (cached) {
      setStats(cached);
      setLoading(false);
      setLastUpdated(new Date());
      return;
    }

    const fetchAll = async () => {
      try {
        const headers: HeadersInit = { Accept: 'application/vnd.github.v3+json' };

        // 1. User profile — gives public_repos & followers
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          { headers }
        );
        if (!userRes.ok) throw new Error(`User API ${userRes.status}`);
        const user = await userRes.json();

        // 2. All public repos (up to 100) — sum stars & forks
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`,
          { headers }
        );
        if (!reposRes.ok) throw new Error(`Repos API ${reposRes.status}`);
        const repos: Array<{ stargazers_count: number; forks_count: number }> =
          await reposRes.json();

        const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
        const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);

        // 3. Merged PRs — GitHub Search API
        const prRes = await fetch(
          `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr+is:merged&per_page=1`,
          { headers }
        );
        const prData = prRes.ok ? await prRes.json() : { total_count: 0 };
        const mergedPRs: number = prData.total_count ?? 0;

        const result: GitHubStats = {
          publicRepos: user.public_repos ?? 0,
          totalStars,
          totalForks,
          mergedPRs,
          followers: user.followers ?? 0,
        };

        toCache(cacheKey, result);
        setStats(result);
        setLastUpdated(new Date());
      } catch (err) {
        console.warn('GitHub API error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return { stats, loading, error, lastUpdated };
}
