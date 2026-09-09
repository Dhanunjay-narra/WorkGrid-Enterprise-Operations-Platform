export class CommChatMessageObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_communication_chatmessage_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
