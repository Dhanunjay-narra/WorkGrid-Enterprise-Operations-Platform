export class BiDashboardObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_analytics_dashboard_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
