export class InvPurchaseOrderItemObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_inventory_purchaseorderitem_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
