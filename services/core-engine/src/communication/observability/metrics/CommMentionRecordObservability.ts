export class CommMentionRecordObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_communication_mentionrecord_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
