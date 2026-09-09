export class FinBankReconciliationObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_finance_bankreconciliation_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
