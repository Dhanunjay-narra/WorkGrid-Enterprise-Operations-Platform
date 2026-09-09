export class IntWebhookEventLogObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_integrations_webhookeventlog_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
