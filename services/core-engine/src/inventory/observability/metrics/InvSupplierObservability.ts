export class InvSupplierObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_inventory_supplier_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
