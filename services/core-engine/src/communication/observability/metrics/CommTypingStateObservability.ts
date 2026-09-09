export class CommTypingStateObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_communication_typingstate_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
