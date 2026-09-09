export class CommNotificationPreferenceObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_communication_notificationpreference_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
