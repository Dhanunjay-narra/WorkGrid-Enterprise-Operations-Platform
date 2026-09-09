export class SupTicketTagObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_support_tickettag_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
