import { NextRequest, NextResponse } from "next/server";
import { fetchUserData, fetchRepos, fetchLanguages } from "@/lib/github";

export async function GET(req: NextRequest) {
  const authorization = req.headers.get("authorization");
  const accessToken = authorization?.split(" ")[1];

  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await fetchUserData(accessToken);
  const repos = await fetchRepos(accessToken);

  const detailedRepos = await Promise.all(
    repos.map(async (repo: any) => {
      const languages = await fetchLanguages(
        accessToken,
        repo.owner.login,
        repo.name,
      );
      return { ...repo, languages };
    }),
  );

  return NextResponse.json({ user, repos: detailedRepos });
}
