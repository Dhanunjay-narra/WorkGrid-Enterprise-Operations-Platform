export class HrPerformanceReviewObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_hr_performancereview_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
