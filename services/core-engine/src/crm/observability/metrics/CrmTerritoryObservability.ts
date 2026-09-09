export class CrmTerritoryObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_crm_territory_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
