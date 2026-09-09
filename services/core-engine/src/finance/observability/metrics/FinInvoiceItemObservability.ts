export class FinInvoiceItemObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_finance_invoiceitem_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
