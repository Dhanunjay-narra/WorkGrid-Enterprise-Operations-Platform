export class FinCostCenterObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_finance_costcenter_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
