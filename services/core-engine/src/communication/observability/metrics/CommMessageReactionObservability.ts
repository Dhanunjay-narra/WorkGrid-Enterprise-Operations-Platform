export class CommMessageReactionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_communication_messagereaction_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
