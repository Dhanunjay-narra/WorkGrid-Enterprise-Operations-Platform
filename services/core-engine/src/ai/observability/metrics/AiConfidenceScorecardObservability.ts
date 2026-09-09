export class AiConfidenceScorecardObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_ai_confidencescorecard_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
