export class IdPolicyObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_identity_policy_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
