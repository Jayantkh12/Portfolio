import { useState, useEffect } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  ranking: number;
  acceptanceRate: number;
}

export interface CodeforcesStats {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
  contribution: number;
  friendOfCount: number;
}

export interface CodingStats {
  leetcode: LeetCodeStats | null;
  codeforces: CodeforcesStats | null;
  leetcodeLoading: boolean;
  codeforcesLoading: boolean;
  leetcodeError: boolean;
  codeforcesError: boolean;
  lastUpdated: Date | null;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const LEETCODE_USERNAME = 'Jayantchoudhary29';
const CODEFORCES_HANDLE = 'Jayantchoudhary29';

// Cache duration: 10 minutes
const CACHE_TTL = 10 * 60 * 1000;

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache: Record<string, CacheEntry<unknown>> = {};

function getCache<T>(key: string): T | null {
  const entry = cache[key] as CacheEntry<T> | undefined;
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
    return entry.data;
  }
  return null;
}

function setCache<T>(key: string, data: T) {
  cache[key] = { data, timestamp: Date.now() };
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useCodingStats(): CodingStats {
  const [leetcode, setLeetcode] = useState<LeetCodeStats | null>(null);
  const [codeforces, setCodeforces] = useState<CodeforcesStats | null>(null);
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [codeforcesLoading, setCodeforcesLoading] = useState(true);
  const [leetcodeError, setLeetcodeError] = useState(false);
  const [codeforcesError, setCodeforcesError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    // ── Fetch LeetCode stats ──────────────────────────────────────────────
    // Uses alfa-leetcode-api (CORS-friendly public proxy)
    const fetchLeetCode = async () => {
      const cacheKey = `lc_${LEETCODE_USERNAME}`;
      const cached = getCache<LeetCodeStats>(cacheKey);
      if (cached) {
        setLeetcode(cached);
        setLeetcodeLoading(false);
        return;
      }

      try {
        // Fetch solved breakdown + profile in parallel
        const [solvedRes, profileRes] = await Promise.all([
          fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`),
          fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`),
        ]);

        if (!solvedRes.ok || !profileRes.ok) throw new Error('LeetCode API error');

        const solved = await solvedRes.json();
        const profile = await profileRes.json();

        // alfa-leetcode-api response shapes:
        // /solved  → { solvedProblem, easySolved, mediumSolved, hardSolved }
        // /userProfile → { totalSolved, totalEasy, totalMedium, totalHard, ranking, ... }
        const stats: LeetCodeStats = {
          totalSolved: solved.solvedProblem ?? profile.totalSolved ?? 0,
          easySolved: solved.easySolved ?? 0,
          mediumSolved: solved.mediumSolved ?? 0,
          hardSolved: solved.hardSolved ?? 0,
          totalEasy: profile.totalEasy ?? 873,
          totalMedium: profile.totalMedium ?? 1831,
          totalHard: profile.totalHard ?? 817,
          ranking: profile.ranking ?? 0,
          acceptanceRate: profile.acceptanceRate
            ? Math.round(profile.acceptanceRate * 10) / 10
            : 0,
        };

        setCache(cacheKey, stats);
        setLeetcode(stats);
        setLastUpdated(new Date());
      } catch {
        setLeetcodeError(true);
      } finally {
        setLeetcodeLoading(false);
      }
    };

    // ── Fetch Codeforces stats ────────────────────────────────────────────
    const fetchCodeforces = async () => {
      const cacheKey = `cf_${CODEFORCES_HANDLE}`;
      const cached = getCache<CodeforcesStats>(cacheKey);
      if (cached) {
        setCodeforces(cached);
        setCodeforcesLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://codeforces.com/api/user.info?handles=${CODEFORCES_HANDLE}`
        );
        if (!res.ok) throw new Error('Codeforces API error');
        const data = await res.json();
        if (data.status !== 'OK') throw new Error('Bad response');

        const u = data.result[0];
        const stats: CodeforcesStats = {
          handle: u.handle,
          rating: u.rating ?? 0,
          maxRating: u.maxRating ?? 0,
          rank: u.rank ?? 'unrated',
          maxRank: u.maxRank ?? 'unrated',
          contribution: u.contribution ?? 0,
          friendOfCount: u.friendOfCount ?? 0,
        };

        setCache(cacheKey, stats);
        setCodeforces(stats);
        setLastUpdated(new Date());
      } catch {
        setCodeforcesError(true);
      } finally {
        setCodeforcesLoading(false);
      }
    };

    fetchLeetCode();
    fetchCodeforces();
  }, []);

  return {
    leetcode,
    codeforces,
    leetcodeLoading,
    codeforcesLoading,
    leetcodeError,
    codeforcesError,
    lastUpdated,
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Maps a Codeforces rating number to a display color */
export function cfRatingColor(rating: number): string {
  if (rating >= 2400) return '#FF0000'; // red — Grandmaster+
  if (rating >= 2100) return '#FF8C00'; // orange — Master
  if (rating >= 1900) return '#AA00AA'; // violet — Candidate Master
  if (rating >= 1600) return '#0000FF'; // blue — Expert
  if (rating >= 1400) return '#03A89E'; // cyan — Specialist
  if (rating >= 1200) return '#008000'; // green — Pupil
  return '#808080';                     // gray — Newbie / unrated
}

/** Capitalises rank title */
export function formatRank(rank: string): string {
  return rank
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
