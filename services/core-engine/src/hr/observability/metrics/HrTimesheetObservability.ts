export class HrTimesheetObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_hr_timesheet_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
