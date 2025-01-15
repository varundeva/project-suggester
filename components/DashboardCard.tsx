interface Repo {
  name: string;
  description: string;
  languages: Record<string, number>;
}

export default function DashboardCard({ repo }: { repo: Repo }) {
  return (
    <div className="card">
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>Languages: {Object.keys(repo.languages).join(", ")}</p>
    </div>
  );
}
