
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("mb") ?? "20";
  const mb = Number(raw);

  if (!Number.isInteger(mb) || mb < 1 || mb > 100) {
    return NextResponse.json(
      { error: "mb must be between 1 and 100" },
      { status: 400 }
    );
  }

  // Allocate a controlled amount of memory.
  const buffer = Buffer.alloc(mb * 1024 * 1024, 1);

  const memoryUsage = process.memoryUsage();

  // Keep the buffer in use until measurements are collected.
  const checksum = buffer[0] + buffer[buffer.length - 1];

  return NextResponse.json({
    status: "completed",
    allocatedMB: mb,
    checksum,
    memoryUsageMB: {
      rss: Math.round(memoryUsage.rss / 1024 / 1024),
      heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024),
      external: Math.round(memoryUsage.external / 1024 / 1024),
    },
  });
}
