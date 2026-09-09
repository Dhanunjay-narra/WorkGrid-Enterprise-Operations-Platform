export class CrmEmailSequenceObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_crm_emailsequence_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
