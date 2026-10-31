import { Suspense } from "react";
import { connection } from "next/server";

async function ApplicationConfiguration() {
  await connection();

  const appName = process.env.APP_NAME;
  const appEnv = process.env.APP_ENV;
  const appVersion = process.env.APP_VERSION;
  const logLevel = process.env.LOG_LEVEL;

  return (
    <>
      <h2>Application Configuration</h2>

      <p>Application Name: {appName ?? "Not Configured"}</p>
      <p>Environment: {appEnv ?? "Not Configured"}</p>
      <p>Application Version: {appVersion ?? "Not Configured"}</p>
      <p>Log Level: {logLevel ?? "Not Configured"}</p>

      <h2>Configuration Source</h2>

      <p>
        APP_NAME: {appName !== undefined ? "Environment Variable" : "Not Set"}
      </p>

      <p>
        APP_ENV: {appEnv !== undefined ? "Environment Variable" : "Not Set"}
      </p>

      <p>
        APP_VERSION:{" "}
        {appVersion !== undefined ? "Environment Variable" : "Not Set"}
      </p>

      <p>
        LOG_LEVEL:{" "}
        {logLevel !== undefined ? "Environment Variable" : "Not Set"}
      </p>
    </>
  );
}

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

      <Suspense fallback={<p>Loading application configuration...</p>}>
        <ApplicationConfiguration />
      </Suspense>

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