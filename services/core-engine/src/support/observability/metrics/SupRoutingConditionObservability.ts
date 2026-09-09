export class SupRoutingConditionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_support_routingcondition_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
