export class IntHealthCheckPingObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_integrations_healthcheckping_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
