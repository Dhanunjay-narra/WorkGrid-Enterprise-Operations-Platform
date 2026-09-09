export class IntOAuthConnectionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_integrations_oauthconnection_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
