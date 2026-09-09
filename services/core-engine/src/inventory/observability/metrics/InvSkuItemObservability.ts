export class InvSkuItemObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_inventory_skuitem_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
