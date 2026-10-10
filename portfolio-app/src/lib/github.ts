export interface GitHubCommit {
  sha: string;
  message: string;
  date: string;
  url: string;
  author: string;
}

const REPO = 'Ezra-Data/Machine_Learning_Projects';

/**
 * Fetches the most recent commits from Ezra's ML Projects monorepo.
 * Uses Next.js ISR (revalidate every 5 minutes / 300s).
 * Fails gracefully and silently returns an empty array if GitHub API is unreachable or rate limited.
 */
export async function getRecentCommits(limit = 5): Promise<GitHubCommit[]> {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'Ezra-Portfolio-App',
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/repos/${REPO}/commits?per_page=${limit}`, {
      headers,
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    if (!Array.isArray(data)) {
      return [];
    }

    return data.map((item: any) => ({
      sha: item.sha?.slice(0, 7) || '',
      message: item.commit?.message?.split('\n')[0] || '',
      date: item.commit?.author?.date || item.commit?.committer?.date || '',
      url: item.html_url || `https://github.com/${REPO}/commit/${item.sha}`,
      author: item.commit?.author?.name || 'Ezra Ndinya',
    }));
  } catch {
    return [];
  }
}

/**
 * Formats a relative time string (e.g. "2 hours ago", "3 days ago")
 */
export function formatRelativeTime(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}
