export class PrjRiskItemObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_projects_riskitem_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
