export class IdSsoConfigObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_identity_ssoconfig_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
