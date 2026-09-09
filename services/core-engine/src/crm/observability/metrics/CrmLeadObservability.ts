export class CrmLeadObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_crm_lead_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
