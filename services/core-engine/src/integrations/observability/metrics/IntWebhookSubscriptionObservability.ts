export class IntWebhookSubscriptionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_integrations_webhooksubscription_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
