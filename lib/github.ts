export const fetchUserData = async (accessToken: string) => {
  const res = await fetch("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return res.json();
};

export const fetchRepos = async (accessToken: string) => {
  const res = await fetch("https://api.github.com/user/repos", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return res.json();
};

export const fetchLanguages = async (
  accessToken: string,
  repoOwner: string,
  repoName: string,
) => {
  const res = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/languages`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  return res.json();
};
