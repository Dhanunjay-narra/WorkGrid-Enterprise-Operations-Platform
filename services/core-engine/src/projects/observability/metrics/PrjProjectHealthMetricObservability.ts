export class PrjProjectHealthMetricObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_projects_projecthealthmetric_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
