export class SupSatisfactionReportObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_support_satisfactionreport_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
