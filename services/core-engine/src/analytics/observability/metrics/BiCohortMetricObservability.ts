export class BiCohortMetricObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_analytics_cohortmetric_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
