export class EvtIdempotencyRecordObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_events_idempotencyrecord_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
