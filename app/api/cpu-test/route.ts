
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const requested = Number(
    request.nextUrl.searchParams.get("duration") ?? "1000"
  );

  if (!Number.isFinite(requested)) {
    return NextResponse.json(
      { error: "Invalid duration" },
      { status: 400 }
    );
  }

  // Limit each test request to a maximum of 3 seconds.
  const duration = Math.max(100, Math.min(requested, 3000));

  const start = performance.now();
  let iterations = 0;
  let result = 0;

  // CPU-intensive calculation for a controlled duration.
  while (performance.now() - start < duration) {
    result += Math.sqrt((iterations % 10000) + 1);
    iterations++;
  }

  return NextResponse.json({
    status: "completed",
    durationMs: Math.round(performance.now() - start),
    iterations,
    result,
  });
}
