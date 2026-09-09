export class EvtEventBatchObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_events_eventbatch_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
