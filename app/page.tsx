export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "80px auto",
        padding: "20px",
      }}
    >
      <h1>DevOps Lab Application</h1>

      <p>
        A Next.js application for practicing Docker,
        Kubernetes, monitoring, and troubleshooting.
      </p>

      <h2>Application Status</h2>
      <p>Running</p>

      <h2>Available Endpoints</h2>
      <ul>
        <li>/api/health</li>
        <li>/api/cpu-test (coming soon)</li>
        <li>/api/memory-test (coming soon)</li>
      </ul>
    </main>
  );
}