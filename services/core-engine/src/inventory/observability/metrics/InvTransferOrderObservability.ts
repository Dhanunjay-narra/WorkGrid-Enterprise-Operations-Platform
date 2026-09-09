export class InvTransferOrderObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_inventory_transferorder_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
