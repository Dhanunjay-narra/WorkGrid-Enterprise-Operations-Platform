export class CrmDealObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_crm_deal_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
