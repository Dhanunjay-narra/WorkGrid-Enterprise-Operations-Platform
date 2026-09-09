export class IdMfaConfigObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_identity_mfaconfig_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
