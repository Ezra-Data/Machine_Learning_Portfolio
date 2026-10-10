const ML_REPO = 'Ezra-Data/Machine_Learning_Projects';

export function getGithubFolderUrl(githubPath: string): string {
  if (!githubPath) return '';
  return `https://github.com/${ML_REPO}/tree/main/${githubPath}`;
}

export function getProjectGithubUrl(project: { githubUrl?: string; githubPath?: string }): string {
  if (project.githubUrl) return project.githubUrl;
  if (project.githubPath) return getGithubFolderUrl(project.githubPath);
  return '';
}
