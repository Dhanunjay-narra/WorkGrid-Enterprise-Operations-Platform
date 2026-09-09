export class SupCsatScoreObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_support_csatscore_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
