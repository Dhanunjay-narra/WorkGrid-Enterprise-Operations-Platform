export class FinFinancialForecastObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_finance_financialforecast_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
