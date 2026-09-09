export class BiAggregatedDailyMetricObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_analytics_aggregateddailymetric_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
